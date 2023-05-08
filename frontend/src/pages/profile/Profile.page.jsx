import "../../styles/profile/profile-page.css";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context/provider";
import { MdOutlineLocationOn, MdEmail, MdPhoneEnabled } from "react-icons/md";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { BiUser } from "react-icons/bi";
import Heading from "../../components/Heading.component";
import Post from "../../components/Post.component";

const ProfilePage = () => {
  const { User, BACKEND_URL } = useStateContext();
  const [posts, setPosts] = useState(null);
  let gender = "";
  if (User !== "") {
    gender = User?.gender[0]?.toUpperCase() + User?.gender?.slice(1);
  }

  const fetchPosts = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/posts/${User?.email}`);
      setPosts(result.data.data);
      console.log(result.data.data);
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
    if (User) {
      fetchPosts();
    }
  }, [User]);
  return (
    <>
      <div className="profile-page_wrapper">
        <div className="profile-page_banner">
          <div className="page-left-pad">
            <div className="profile-page_banner-left">
              <img src={User?.photoURL} alt="" />
              <div className="profile-page_user-info">
                <h1>{User?.userName}</h1>
                <div>
                  <MdOutlineLocationOn size={20} /> <p>{User?.location}</p>
                </div>
                <div>
                  {User?.gender === "male" ? (
                    <IoMdMale size={20} />
                  ) : (
                    <IoMdFemale size={20} />
                  )}{" "}
                  <p>{gender}</p>
                </div>
                <div>
                  <BiUser size={20} /> <p>{User?.age} years old</p>
                </div>
              </div>
            </div>
            <div className="profile-page_banner-right">
              <div>
                <MdEmail color="white" size={18} /> <p>{User?.email}</p>
              </div>
              <div>
                <MdPhoneEnabled color="white" size={18} />{" "}
                <p>{User?.mobileNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-page_content page-left-pad">
          <div>
            <Heading>History</Heading>
            <strong style={{ textAlign: "center", color: "red" }}>
              Sorry, No History to Show!
            </strong>
          </div>
          <div>
            <Heading>My Posts</Heading>
            <div className="profile-page_content-items">
              {posts && [
                posts.length > 0 ? (
                  posts.map((post) => {
                    return <Post key={post.user} data={post} />;
                  })
                ) : (
                  <strong style={{ textAlign: "center", color: "red" }}>
                    Sorry, No Posts to Show!
                  </strong>
                ),
              ]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
