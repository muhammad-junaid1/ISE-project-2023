import "../styles/post.css";
import UserTag from "./UserTag.component";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdMale, IoMdFemale, IoIosCall } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import Button from "./Button.component";

const Post = ({data}) => {
  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <img
            className="avatar-img"
            src={
              data.imgSrc
            }
            alt="User"
          />
          <div>
            <p className="post-header_username">{data.username}</p>
            <UserTag type={data.type} />
          </div>
        </div>

        <div className="post-body">
          <div className="post-body_item">
            <MdOutlineLocationOn size={22} /><p>{data.location}</p>
          </div>
          <div className="post-body_item">
           {data.gender === "Male" ? <IoMdMale size={22} /> : <IoMdFemale size={22}/>} <p>{data.gender}</p>
          </div>
          <div className="post-body_item">
            <BiUser size={22} /> <p>{data.age} years old</p>
          </div>
        </div>

        <div className="post-footer">
          <Button type="secondary">
            <IoIosCall size={18} />
            Contact
          </Button>
        </div>

        <div className="post_bloodgroup">
          <h1>{data.bloodgroup}</h1>
        </div>
      </div>
    </>
  );
};

export default Post;
