import React, { Component } from 'react';
import Navbar from './Navbar'; 
import Carousel from './Carousel'; 
import youtube from '../api/youtube'; 

class Home extends Component {
    state = { 
        videos: [], 
        main: 'news', 
        mainArray: [], 
        trending: 'trending', 
        trendingArray: []
    }

    componentDidMount() {
        this.loadVideos()
    }

    loadVideos = async () => {
        const response = await youtube('/search', {
            params: {
                q: this.state.main 
            }
        })
        
        this.setState({ mainArray: response.data.items[0] })

    }

    render() {
        return (
        <body className='body'>
            <Navbar /> 
            <Carousel /> 
            <section className="main-videos">
                <iframe className="top-video" width="550" height="315" src="https://www.youtube.com/embed/2fcx4oNPe3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </body>
        )
    }
}

export default Home; 