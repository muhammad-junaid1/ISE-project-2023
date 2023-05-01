import HomeBanner from "./HomeBanner.component";
import HomeFeed from "./HomeFeed.component";
import "../../styles/home/home-section.css";

const HomeContent = () => {
    return (
        <>
        <section>
            <HomeBanner/>
            <HomeFeed/>
        </section>
        </>
    );
}

export default HomeContent;