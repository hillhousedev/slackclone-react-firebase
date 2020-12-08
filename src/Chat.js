import React, {useEffect} from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import db from "./firebase";

function Chat() {

    const { roomId } = useParams();
    const {roomDetails, setRoomDetails} = useState(null);

    useEffect(() => {
      if(roomId) {
          db.collection('rooms').document(roomId)
            .onSnapshot(snapshot => (

            ))
      }
    }, [roomId])

    return (
        <div className="chat">
            <h2>You are in the {roomId} room </h2>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># general </strong>
                        <StarOutlineIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        {/* <InfoOutlined /> Details */}
                        <InfoIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
