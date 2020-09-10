import React, { Component } from 'react'; 

const MainVideo = ({ video }) => {

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <section className="main-videos">
                <iframe 
                 className="top-video"
                 width="700"
                 height="470"
                 src={videoSrc}
                 frameborder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>
            </section>
        )
}

export default MainVideo; 