import React from 'react'

const YoutubeListResults = ({ videos }) => {

    const topFourVideos = videos.slice(0, 10); 

    const renderedList = topFourVideos.map( video => {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <section className='trendings'>
                <iframe 
                 className="top-video"
                 width="590"
                 height="400"
                 src={videoSrc}
                 frameborder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>
            </section>
        )
    })

    return (
        <div>
            {renderedList}
        </div>
    )

}

export default YoutubeListResults; 