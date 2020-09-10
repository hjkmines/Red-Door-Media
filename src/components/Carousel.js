import React, { Component } from 'react'; 
import news from '../api/news'; 
import Slide from './Slide'; 

class Carousel extends Component {
    state = { slides: [] }

    componentDidMount() {
        this.loadSlides(); 
    }

    loadSlides = async () => {
        const response = await news.get('/top-headlines', {
            params: {
                country: 'us', 
                apiKey: '2a717d771d85444cb9cb8eda83414b88'
            }
        })

        this.setState({ slides: response.data.articles })
    } 

    render() {
        return (
            <div>
                <div id="news-slide" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner carousel-news">
                            <Slide slides={this.state.slides} /> 
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
}

export default Carousel; 