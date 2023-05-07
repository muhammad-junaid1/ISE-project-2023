import HomeContent from "./HomeSection.component";
import RequestsBar from "./RequestsBar.component";

const Home = () => {
  return (
    <>
      <div className="page-wrapper page-left-pad page-right-pad">
        <HomeContent/>
        <RequestsBar/>
      </div>
    </>
  );
};

export default Home;
