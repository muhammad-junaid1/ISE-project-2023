import Nav from "../Nav.component";
import HomeContent from "./HomeSection.component";
import RequestsBar from "./RequestsBar.component";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <Nav/>
        <HomeContent/>
        <RequestsBar/>
      </div>
    </>
  );
};

export default Home;
