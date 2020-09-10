import React, { Component } from 'react';
import Navbar from './Navbar'; 
import Carousel from './Carousel'; 
import MainVideo from './MainVideo'; 
import youtube from '../api/youtube'; 

class Home extends Component {

    state = { 
        mainVideo: null,
        main: 'news'
    }

    componentDidMount() {
        this.loadVideos()
    }

    loadVideos = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: this.state.main
            }
        })
        
        this.setState({ mainVideo: response.data.items[0] })
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
        </body> 
        )
    }
}

export default Home; 