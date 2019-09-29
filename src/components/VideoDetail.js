import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }

    //fetching the data, he tell you in episode 126 how to do it.
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    // the iframe makes it possible to get a videoplayer inside our app
    return (
        <div>
            <div className="ui embed">
                <iframe title="player" src={videoSrc} />

            </div>
            <div className="ui segment">
                <h4 className="ui header">
                {video.snippet.title}
                </h4>
                <p>
                {video.snippet.description}
                </p>
            </div>
        </div>
        );
    };
    
    export default VideoDetail;