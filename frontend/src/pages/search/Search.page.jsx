import { useEffect, useState } from "react";
import Heading from "../../components/Heading.component";
import axios from "axios";
import { useStateContext } from "../../context/provider";
import Post from "../../components/Post.component";
import { toast } from "react-toastify";
import "../../styles/search/search.css";
import { FaTimes } from "react-icons/fa";

const Search = () => {
  const [searchInputVal, setSearchInputVal] = useState("");
  const { BACKEND_URL } = useStateContext();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    location: "",
    type: "",
    bloodGroup: "",
  });

  const fetchPosts = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/posts`);
      setPosts(result.data.data);
      setFilteredItems(result.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const clearFilters = () => {
    setFilters({
      gender: "",
      location: "",
      type: "",
      bloodGroup: "",
    });
  };

  const getSearchedPosts = () => {
    let filtered = posts;

    if(searchInputVal) {
      filtered = filtered.filter((post) => {
      return (
          post.user.toLowerCase().includes(searchInputVal) ||
          post.gender.toLowerCase().includes(searchInputVal) ||
          post.type.toLowerCase().includes(searchInputVal) ||
          post.location.toLowerCase().includes(searchInputVal) ||
          post.bloodGroup.toLowerCase().includes(searchInputVal)
        );
      });
    }

      if (filters.gender) {
        filtered = filtered.filter(
          (post) => post.gender.toLowerCase() === filters.gender.toLowerCase()
        );
      }

      if (filters.bloodGroup) {
        filtered = filtered.filter(
          (post) =>
            post.bloodGroup.toLowerCase() === filters.bloodGroup.toLowerCase()
        );
      }

      if (filters.location) {
        filtered = filtered.filter(
          (post) =>
            post.location.toLowerCase() === filters.location.toLowerCase()
        );
      }

      if (filters.type) {
        filtered = filtered.filter(
          (post) => post.type.toLowerCase() === filters.type.toLowerCase()
        );
      }
      
      if(filtered.length === 0) {
        setFilteredItems([]);
        setNoResults(true);
      } else {
        setNoResults(false);
        setFilteredItems(filtered);
      }
  };

  const handleChangeFilter = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if(searchInputVal || Object.values(filters).some((filter) => filter)) {
      getSearchedPosts();
    }
  }, [searchInputVal, filters]);
  return (
    <>
      <div className="page-wrapper page-left-pad">
        <Heading>Search</Heading>
        <form method="GET">
          <div className="field input-field">
            <input
              style={{ width: "40%" }}
              type="text"
              value={searchInputVal}
              name="query"
              onInput={(e) => setSearchInputVal(e.target.value.toLowerCase())}
              placeholder="Type here.."
              required
              autoComplete="off"
            />
          </div>
        </form>

        <div className="search-page_filters">
          <div className="field input-field">
            <select
              value={filters.gender}
              name="gender"
              onInput={handleChangeFilter}
              required
              autoComplete="off"
            >
              <option disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="field input-field">
            <select
              value={filters.location}
              name="location"
              onInput={handleChangeFilter}
              required
              autoComplete="off"
            >
              <option disabled value="">
                Location
              </option>
              <option value="islamabad">Islamabad</option>
              <option value="punjab">Punjab</option>
              <option value="sindh">Sindh</option>
              <option value="balochistan">Balochistan</option>
              <option value="kpk">KPK</option>
            </select>
          </div>
          <div className="field input-field">
            <select
              value={filters.type}
              name="type"
              onInput={handleChangeFilter}
              required
              autoComplete="off"
            >
              <option disabled value="">
                Type
              </option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
            </select>
          </div>
          <div className="field input-field">
            <select
              value={filters.bloodGroup}
              name="bloodGroup"
              onInput={handleChangeFilter}
              required
            >
              <option disabled value="">
                Blood Group
              </option>
              <option value="a+">A positive</option>
              <option value="a-">A negative</option>
              <option value="b+">B positive</option>
              <option value="b-">B negative</option>
              <option value="ab+">AB positive</option>
              <option value="ab-">AB negative</option>
              <option value="o+">O positive</option>
              <option value="o-">O negative</option>
            </select>
          </div>
          {!Object.values(filters).every((filter) => !filter) && (
            <div className="field input-field" style={{ marginLeft: 12 }}>
              <FaTimes
                onClick={clearFilters}
                className="tooltip"
                data-tooltip-content="Clear Filters"
                style={{ marginTop: 5, cursor: "pointer" }}
                size={20}
                color="red"
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: 20 }}>
          <h2>
            {searchInputVal
              ? `Search Results for: "${searchInputVal}"`
              : (Object.values(filters).some((post) => post) ? "Filter Results" :"Recent Posts")}
          </h2>
          <div className="profile-page_content-items" style={{ marginTop: 15 }}>
          {noResults &&  <strong style={{ textAlign: "center", color: "red" }}>
            Sorry, No Posts Found!
            </strong>}
            {searchInputVal || Object.values(filters).some((filter) => filter)
              ? filteredItems.map((post, index) => <Post key={index} data={post}/>)
              : posts.map((post, index) => <Post key={index} data={post} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
