import "../styles/user-tag.css";

const UserTag = ({type}) => {
    let userType = "";
    if(type) {
        userType = type[0]?.toString()?.toUpperCase() + type?.slice(1);
    }
    return (
        <>
            <div className={`user-tag user_${type.toLowerCase()}`}>
                <p>{userType}</p>
            </div>
        </>
    );
}

export default UserTag;