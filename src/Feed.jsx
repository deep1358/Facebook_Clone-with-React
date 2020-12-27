import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import db from "./firebase"

function Feed() {

    const [posts, setPost] = React.useState([])

    React.useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profileimage={post.data.profileimage}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
