import "../../styles/profile/profile-page.css";
import { useStateContext } from "../../context/provider";

const ProfilePage = () => {
    const {User} = useStateContext();
    return (
        <>
            <div className="profile-page_wrapper">
                <div className="profile-page_banner">
                    <div className="page-left-pad">
                    {/* {User.photoURL} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;