import "../styles/user-tag.css";

const UserTag = ({type}) => {
    return (
        <>
            <div className={`user-tag post_${type.toLowerCase()}`}>
                <p>{type}</p>
            </div>
        </>
    );
}

export default UserTag;