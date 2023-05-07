import HomeContent from "./HomeSection.component";
import RequestsBar from "./RequestsBar.component";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <HomeContent/>
        <RequestsBar/>
      </div>
    </>
  );
};

export default Home;
