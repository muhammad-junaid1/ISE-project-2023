import { useEffect, useState } from "react";
import Button from "../Button.component";
import Post from "../Post.component";
import { toast } from "react-toastify";
import axios from "axios";
import { useStateContext } from "../../context/provider";

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(null);
  const { BACKEND_URL } = useStateContext();
  const [activeBtn, setActiveBtn] = useState("All");

  const handleChangeTab = (btn) => {
    setActiveBtn(btn);
    if (btn === "All") {
      setFilteredPosts(posts);
    } else if (btn === "Donors") {
      setFilteredPosts(posts.filter((post) => post.type === "donor"));
    } else {
      setFilteredPosts(posts.filter((post) => post.type === "recipient"));
    }
  };

  const fetchPosts = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/posts`);
      setPosts(result.data.data);
      setFilteredPosts(result.data.data);
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

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="home-section_tabs">
        {["All", "Donors", "Recipients"].map((btn) => {
          return (
            <Button
              onClick={() => handleChangeTab(btn)}
              type={btn === activeBtn ? "primary" : "secondary"}
            >
              {btn}
            </Button>
          );
        })}
      </div>

      <div className="home-section_posts">
        {filteredPosts && [
          filteredPosts.length > 0 ?
            filteredPosts.map((post) => {
              return <Post key={post.user} data={post} />;
            }) : <strong style={{textAlign: "center", color:"red"}}>Sorry, No Posts to Show!</strong>
        ]}
      </div>
    </>
  );
};

export default HomeFeed;
