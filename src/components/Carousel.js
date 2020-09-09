import React from 'react'; 
import './Carousel.css'; 

export const Carousel = () => {
    return (
        <div>
            <div id="news-slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner carousel-news">
            </div>
                <a className="carousel-control-prev arrow left-arrow" href="#news-slide" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next arrow right-arrow" href="#news-slide" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
