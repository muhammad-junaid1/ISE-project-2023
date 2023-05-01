import BannerImg from "../../assets/banner-img.png";

const HomeBanner = () => {
    return (
        <>
            <div className="home-section_banner">
                <h1>Be A Hero — It's In Your Blood!</h1>
                <p>Give and Receive the Gift of Life - With Our Web App</p>
                <img src={BannerImg} alt="Banner Illustration"/>
            </div>
        </>
    );
}

export default HomeBanner;