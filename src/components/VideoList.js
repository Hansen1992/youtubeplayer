import React from 'react';
import VideoItem from './VideoItem';

//E6 syntax istedet for at skrive props i const VideoList = ({ videos })
// Så kan man skrive 'videos' og dernæst refere det ned til vores return, så der dernede heller ikke skal stå
// props.videos.length, men blot vidoes.length
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return <VideoItem 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect} 
        video={video} 
        />
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;