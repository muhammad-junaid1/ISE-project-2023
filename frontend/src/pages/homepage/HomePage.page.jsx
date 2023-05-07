import Home from "../../components/home/Home.component";
import Auth from "../auth/Auth";
import {useStateContext} from "../../context/provider";

const HomePage = () => {
    const {User, isProfileCompleted} = useStateContext();
    if(User && isProfileCompleted) {
        return <Home/>
    } else {
        return <Auth/>
    }
}

export default HomePage;