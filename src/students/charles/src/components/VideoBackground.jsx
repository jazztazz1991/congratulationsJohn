import React from 'react';
import '../css/video.css';
const VideoBackground = (width, height) => {

    return (

<div id="container">
        <iframe id="vid" width={width} height={height}
            src="https://www.youtube.com/embed/Wzx2izzHMQ0">
        </iframe>
        </div>
    );
};

export default VideoBackground;