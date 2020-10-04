import React from 'react';
import "./Feed.css"
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/118657070_10219622914417669_4076078204735283247_o.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=GCd0w8IbP4sAX-ARNdq&_nc_ht=scontent.fatl1-2.fna&_nc_tp=27&oh=f514726249fbf6b47a731a445907f3d3&oe=5F9E4115"
                message="Wow this works!"
                timestamp="This is a timestamp"
                username="iamjohniii"
                image="https://i.ytimg.com/vi/U_GsS_P0pUk/maxresdefault.jpg"
                // message={message}
                // timestamp={timestamp}
                // username={username}
                // image={image}
            />
        </div>
    );
};

export default Feed;