import Home from "../../components/home/Home.component";
import Auth from "../auth/Auth";
import {useStateContext} from "../../context/provider";

const HomePage = () => {
    const {User} = useStateContext();
    if(User) {
        return <Home/>
    } else {
        return <Auth/>
    }
}

export default HomePage;