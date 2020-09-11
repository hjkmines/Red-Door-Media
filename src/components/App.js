import React, { Component } from 'react'; 
import LogIn from './LogIn'; 
import Home from './Home';
import SearchType from './SearchType'; 
import youtube from '../api/youtube'; 
import unsplash from '../api/unsplash'; 
import news from '../api/news'; 


class App extends Component {

    state = {
        onSearchSubmit: 'no', 
        mediaType: '',
        videos: [], 
        news: [], 
        images: [],
    }

    componentDidMount() {
        this.onYoutubeSearch() 
        this.onNewsSearch() 
        this.onImageSearch()
    }

    setMediaType = (term) => {
        this.setState({ mediaType: term })
    }

    onSearchSubmit = () => {
        this.setState({ onSearchSubmit: 'yes' })
    }

    goHome = () => {
        this.setState({ onSearchSubmit: 'no' })
    }

    onYoutubeSearch = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term 
            }
        })

        this.setState({ videos: response.data.items })
    }

    onNewsSearch = async (term) => {
        const response = await news.get('/everything', {
            params: {
                q: term, 
                apiKey: '2a717d771d85444cb9cb8eda83414b88'
            }
        })

        this.setState({ news: response.data.articles })
    }

    onImageSearch = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
               query: term, 
               per_page: 100
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
            { this.state.onSearchSubmit === 'no' ? 
            <Home 
                onSearchSubmit={this.onSearchSubmit} 
                setMediaType={this.setMediaType} 
                mediaType={this.state.mediaType} 
                onImageSearch={this.onImageSearch} 
                onNewsSearch={this.onNewsSearch} 
                onYoutubeSearch={this.onYoutubeSearch} 
                images={this.state.images}
                videos={this.state.videos}
                news={this.state.news}
            /> : 
            <SearchType 
                onSearchSubmit={this.onSearchSubmit}
                setMediaType={this.setMediaType} 
                mediaType={this.state.mediaType} 
                onImageSearch={this.onImageSearch} 
                onNewsSearch={this.onNewsSearch} 
                onYoutubeSearch={this.onYoutubeSearch} 
                images={this.state.images}
                videos={this.state.videos}
                news={this.state.news}
            /> }
               
            </div>
        )
    }
} 

export default App; 