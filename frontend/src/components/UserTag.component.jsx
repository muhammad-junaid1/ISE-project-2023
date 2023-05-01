import "../styles/user-tag.css";

const UserTag = ({type}) => {
    return (
        <>
            <div className="user-tag">
                <p>{type}</p>
            </div>
        </>
    );
}

export default UserTag;