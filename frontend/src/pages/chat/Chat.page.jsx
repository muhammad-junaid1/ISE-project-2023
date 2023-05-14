import { useParams } from "react-router";
import Heading from "../../components/Heading.component";

const Chat = () => {
    const {user} = useParams();
    return (
        <div className="page-wrapper page-left-pad page-right-pad">
            <Heading>Chat</Heading>
            {user === "me" ? <div>
                <h2>No Chats Yet! :(</h2>
            </div> : <div>
                <h2>Lets chat with <strong style={{background: "black", padding: "0 6px", color: "white"}}><i>{user}</i></strong></h2>
            </div>} 
        </div>
    );
}

export default Chat;