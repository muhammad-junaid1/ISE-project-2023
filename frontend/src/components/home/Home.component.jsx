import "./home.styles.css";
import Logo from "../../assets/Logo.png";
import AccountPicture from "../../assets/account-picture.png";
import { IoMdAddCircle } from "react-icons/io";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineHistory,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <nav>
          <div className="home-nav_top">
            <div className="home-nav_logo">
              <a href="/">
                <img src={Logo} alt="Website's Logo" />
              </a>
            </div>
            <div className="home-nav_create">
              <IoMdAddCircle
                style={{ cursor: "pointer" }}
                size={40}
                color="white"
              />
            </div>
            <div className="home-nav_items">
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
          <div className="home-nav_bottom">
            <div className="home-nav_account">
              <img src={AccountPicture} alt="User Account" />
            </div>
          </div>
        </nav>
        <section>Section</section>
        <aside>Aside</aside>
      </div>
    </>
  );
};

export default Home;
