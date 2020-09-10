import React, { Component } from 'react';
import Navbar from './Navbar'; 
import Carousel from './Carousel'; 
import MainVideo from './MainVideo'; 
import TrendingVideos from './TrendingVideos'; 
import youtube from '../api/youtube'; 

class Home extends Component {

    state = { 
        mainVideo: null,
        main: 'news', 
        trending: 'trending', 
        trendingList: []
    }

    componentDidMount() {
        this.loadVideos()
        this.loadTrendingVideos()
    }

    loadVideos = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: this.state.main
            }
        })
        
        this.setState({ mainVideo: response.data.items[0] })
    }

    loadTrendingVideos = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: this.state.trending
            }
        })

        this.setState({ trendingList: response.data.items })
    }

    render() {
        return (
        <body className='body'>
            <Navbar /> 
            <div className='top-titles'>
                <h1>Today's Top Headlines</h1>
                <h1>Top News Clip</h1>
            </div>
            <div className='toppers'>
                <Carousel className='topper' />
                { this.state.mainVideo !== null ? <MainVideo video={this.state.mainVideo} className='topper vid' /> : <div></div> } 
            </div>
            <div className='trending-videos'>
                <h1 className='trending-video-text'>Trending Videos</h1>
            </div>
            <div className='trending-clips-container'>
            { this.state.trendingList.length > 0 ? <TrendingVideos videos={this.state.trendingList} className='trending-clips' /> : <div></div>} 
            </div>
            <div className='trending-news'>
                <h1 className='trending-videos-text'>Trending News</h1>
            </div>
        </body> 
        )
    }
}

export default Home; 