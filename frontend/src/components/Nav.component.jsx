import { IoMdAddCircle } from "react-icons/io";
import Logo from "../assets/Logo.png";
import AccountPicture from "../assets/account-picture.png";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineHistory,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {BiLogOut} from "react-icons/bi";
import "../styles/nav.css";
import { logOut } from "../utils/firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav>
          <div className="nav_top">
            <div className="nav_logo">
              <a className="tooltip" data-tooltip-content="Logo" href="/">
                <img src={Logo} alt="Website's Logo" />
              </a>
            </div>
            <div className="nav_create tooltip" data-tooltip-content="Create Post">
              <IoMdAddCircle
                style={{ cursor: "pointer" }}
                size={38}
                color="white"
              />
            </div>
            <div className="nav_items">
              <NavLink to="/" className="tooltip" data-tooltip-content="Home Page">
                <AiFillHome color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/search" className="tooltip" data-tooltip-content="Search Page">
                <AiOutlineSearch color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/chat" className="tooltip" data-tooltip-content="Chat">
                <AiOutlineMessage color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/profile"  className="tooltip" data-tooltip-content="History page">
                <AiOutlineHistory color="#f7baba" size={25} />
              </NavLink>
            </div>
          </div>
          <div className="nav_bottom">
            <div className="nav_account">
              <Link to="/profile"><img className="avatar-img tooltip" data-tooltip-content="Visit Profile" src={AccountPicture} alt="User Account" /></Link>
              <BiLogOut className="tooltip" data-tooltip-content="Logout" onClick={logOut} size={28} color="white"/>
            </div>
          </div>
        </nav>
        </>
    );
}

export default Navbar;