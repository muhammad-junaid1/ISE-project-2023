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

const Navbar = () => {
    return (
        <>
        <nav>
          <div className="nav_top">
            <div className="nav_logo">
              <a href="/">
                <img src={Logo} alt="Website's Logo" />
              </a>
            </div>
            <div className="nav_create">
              <IoMdAddCircle
                style={{ cursor: "pointer" }}
                size={38}
                color="white"
              />
            </div>
            <div className="nav_items">
              <NavLink to="/">
                <AiFillHome color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/search">
                <AiOutlineSearch color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/chat">
                <AiOutlineMessage color="#f7baba" size={25} />
              </NavLink>
              <NavLink to="/history">
                <AiOutlineHistory color="#f7baba" size={25} />
              </NavLink>
            </div>
          </div>
          <div className="nav_bottom">
            <div className="nav_account">
              <img className="avatar-img" src={AccountPicture} alt="User Account" />
              <BiLogOut onClick={logOut} size={28} color="white"/>
            </div>
          </div>
        </nav>
        </>
    );
}

export default Navbar;