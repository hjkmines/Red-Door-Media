import React, { Component } from 'react';
import Navbar from './Navbar'; 
import Carousel from './Carousel'; 
import MainVideo from './MainVideo'; 
import TrendingVideos from './TrendingVideos'; 
import TrendingNews from './TrendingNews'; 
import youtube from '../api/youtube'; 
import news from '../api/news'; 

class Home extends Component {

    state = { 
        mainVideo: null,
        main: 'news', 
        trendingVideos: 'popular', 
        trendingVideosList: [], 
        trendingNews: 'popular',
        trendingNewsList: []
    }

    componentDidMount() {
        this.loadVideos()
        this.loadTrendingVideos()
        this.loadTrendingNews() 
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
                q: this.state.trendingVideos
            }
        })

        this.setState({ trendingVideosList: response.data.items })
    }

    loadTrendingNews = async () => {
        const response = await news.get('/everything', {
            params: {
                q: this.state.trendingNews, 
                apiKey: '2a717d771d85444cb9cb8eda83414b88'
            }
        })

        this.setState({ trendingNewsList: response.data.articles })
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
            { this.state.trendingVideosList.length > 0 ? <TrendingVideos videos={this.state.trendingVideosList} className='trending-clips' /> : <div></div>} 
            </div>
            <div className='trending-news-label'>
                <h1 className='trending-videos-text'>Trending News</h1>
            </div>
            <div className='trending-news-container'>
                { this.state.trendingNewsList.length > 0 ? <TrendingNews news={this.state.trendingNewsList} className='trending-news' /> : <div></div>} 
            </div>
        </body> 
        )
    }
}

export default Home; 