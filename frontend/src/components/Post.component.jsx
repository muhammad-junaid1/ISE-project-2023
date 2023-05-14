import { useState, useEffect } from "react";
import "../styles/post.css";
import UserTag from "./UserTag.component";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { IoMdMale, IoMdFemale, IoIosCall } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { useStateContext } from "../context/provider";
import Button from "./Button.component";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

const Post = ({ data, fullWidth }) => {
  const [hover, setHover] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const {BACKEND_URL} = useStateContext();

    const fetchUser = async (userEmail) => {
        try {
            const result = await axios.get(`${BACKEND_URL}/users/${userEmail}`);
            setUserData(result.data.data);
            setLoading(false);
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
    }


  useEffect(() => {
    fetchUser(data.user);
  }, []);

  let gender = "";
    gender = data?.gender[0]?.toString()?.toUpperCase() + data?.gender?.slice(1);
  return (
    <>
    {loading ? <div style={{width: 350}} className="post-loading-container"><div className="flash"></div></div> :
      <div className="post-container" style={{width: fullWidth ? "100%" : 370}}>
        <div className="post-header">
          <img className="avatar-img" src={userData?.photoURL} alt="User" />
          <div>
            <p className="post-header_username">{userData?.userName}</p>
            <UserTag type={data.type} />
          </div>
        </div>

        <div className="post-body">
          <div className="post-body_item">
            <MdOutlineLocationOn size={22} />
            <p>{data.location}</p>
          </div>
          <div className="post-body_item">
            {data.gender === "male" ? (
              <IoMdMale size={22} />
            ) : (
              <IoMdFemale size={22} />
            )}{" "}
            <p>{gender}</p>
          </div>
          <div className="post-body_item">
            <BiUser size={22} /> <p>{data.age} years old</p>
          </div>
        </div>

        <div className="post-footer">
          <Link to={`/chat/${data.user}`}>
            <Button
              type="secondary"
              style={{
                background: hover
                  ? data.type === "donor"
                    ? "red"
                    : "#05d605c7"
                  : "",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <IoIosCall size={18} />
              Contact
            </Button>
          </Link>
        </div>

        <div className="post_bloodgroup">
          <h1>{data?.bloodGroup?.toUpperCase()}</h1>
        </div>
      </div>
    }
    </>
  );
};

export default Post;
