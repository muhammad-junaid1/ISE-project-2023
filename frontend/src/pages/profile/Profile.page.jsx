import "../../styles/profile/profile-page.css";
import { useStateContext } from "../../context/provider";
import {MdOutlineLocationOn, MdEmail, MdPhoneEnabled} from "react-icons/md";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { BiUser } from "react-icons/bi";

const ProfilePage = () => {
    const {User} = useStateContext();
    let gender = "";
    if(User !== "") {
        gender = User?.gender[0]?.toUpperCase() + User?.gender?.slice(1);
    }
    return (
        <>
            <div className="profile-page_wrapper">
                <div className="profile-page_banner">
                    <div className="page-left-pad">
                        <div className="profile-page_banner-left">
                            <img src={User?.photoURL} alt=""/>
                            <div className="profile-page_user-info">
                                <h1>{User?.userName}</h1>
                                <div>
                                    <MdOutlineLocationOn size={20}/> <p>{User?.location}</p>
                                </div>
                                <div>
                                    {User?.gender === "male" ? <IoMdMale size={20}/> : <IoMdFemale size={20}/>} <p>{gender}</p>
                                </div>
                                <div>
                                    <BiUser size={20}/> <p>{User?.age} years old</p>
                                </div>
                            </div>
                        </div>
                        <div className="profile-page_banner-right">
                            <div>
                                <MdEmail color="white" size={18}/> <p>{User?.email}</p>
                            </div>
                            <div>
                                <MdPhoneEnabled color="white" size={18}/> <p>{User?.mobileNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;