import { Avatar } from '@material-ui/core'
import React from 'react'
import "./MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoteiconIcon from "@material-ui/icons/InsertEmoticon"
import { useStateValue } from "./StateProvider"
import firebase from "firebase"
import db from "./firebase"

function MessageSender() {

    const [input, setInput] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')
    const [{ user }, dispatch] = useStateValue()

    const submit = e => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileimage: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput('')
        setImageUrl('')
    }

    return (

        <div className="msgsender">
            <div className="msg_top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className="input" />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                        className="input" />
                    <button onClick={submit} type="submit">
                        Hidden submit
                        </button>
                </form>
            </div>
            <div className="msg_bottom">
                <div className="msg_options">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h4>Live Video</h4>
                </div>
                <div className="msg_options">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="msg_options">
                    <InsertEmoteiconIcon style={{ color: 'orange' }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
