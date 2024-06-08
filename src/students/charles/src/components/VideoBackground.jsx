import React from 'react';

const VideoBackground = (area) => {
    return (

        <video  id="vid" autoPlay loop muted>
            <source src="./src/assets/videos/wc3bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


    );
};

export default VideoBackground;