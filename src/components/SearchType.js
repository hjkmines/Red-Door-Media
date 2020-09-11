import React, { Component } from 'react'; 
import SearchBar from './SearchBar';
import Navbar from './Navbar'; 
import unsplash from '../api/unsplash'; 
import ImageResultList from './ImageResultList';
import news from '../api/news'; 
import NewsListResults from './NewsListResults'; 
import youtube from '../api/youtube'; 
import './YoutubeResultList.css'
import YoutubeListResults from './YoutubeListResults'; 

class SearchType extends Component {

    state = { 
        videos: [], 
        news: [], 
        images: [], 
        mediaType: ''
    }

    componentDidMount() {
        this.onYoutubeSearch() 
        this.onNewsSearch() 
        this.onImageSearch()
    }

    mediaType = (term) => {
        this.setState({ mediaType: term })
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
        return(
            <div>   
                <Navbar 
                onImageSearch={this.onImageSearch} 
                onNewsSearch={this.onNewsSearch} 
                onYoutubeSearch={this.onYoutubeSearch} 
                onSearchSubmit={this.props.onSearchSubmit} 
                mediaType={this.mediaType}
                />
                {
                    this.state.mediaType === 'Images' ? 
                <div className='images'> 
                        <ImageResultList images={this.state.images} className='images' /> 
                </div>
                    : 
                    this.state.mediaType === 'News' ? 
                <div className='news-results'>
                        <NewsListResults news={this.state.news} /> 
                </div>
                    : 
                    this.state.mediaType === 'Videos' ? 
                <div className='videos'>
                        <YoutubeListResults videos={this.state.videos} className='videos' /> 
                </div>
                    : 
                <div></div>
                }
            </div>
        )
    }
}

export default SearchType; 