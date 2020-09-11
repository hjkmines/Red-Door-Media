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

    // /s.props = { 
    //     videos: [], 
    //     news: [], 
    //     images: [], 
    //     mediaType: ''
    // }

    // componentDidMount() {
    //     this.onYoutubeSearch() 
    //     this.onNewsSearch() 
    //     this.onImageSearch()
    // }

    // mediaType = (term) => {
    //     this.setState({ mediaType: term })
    // }

    // onYoutubeSearch = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term 
    //         }
    //     })

    //     this.setState({ videos: response.data.items })
    // }

    // onNewsSearch = async (term) => {
    //     const response = await news.get('/everything', {
    //         params: {
    //             q: term, 
    //             apiKey: '2a717d771d85444cb9cb8eda83414b88'
    //         }
    //     })

    //     this.setState({ news: response.data.articles })
    // }

    // onImageSearch = async (term) => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: {
    //            query: term, 
    //            per_page: 100
    //         }
    //     })

    //     this.setState({ images: response.data.results })
    // }

    render() {
        return(
            <div>   
                <Navbar 
                    onImageSearch={this.props.onImageSearch} 
                    onNewsSearch={this.props.onNewsSearch} 
                    onYoutubeSearch={this.props.onYoutubeSearch} 
                    onSearchSubmit={this.props.onSearchSubmit} 
                    mediaType={this.props.mediaType}
                    setMediaType={this.props.setMediaType}
                />
                {
                    this.props.mediaType === 'Images' ? 
                <div className='images'> 
                        <ImageResultList images={this.props.images} className='images' /> 
                </div>
                    : 
                    this.props.mediaType === 'News' ? 
                <div className='news-results'>
                        <NewsListResults news={this.props.news} /> 
                </div>
                    : 
                    this.props.mediaType === 'Videos' ? 
                <div className='videos'>
                        <YoutubeListResults videos={this.props.videos} className='videos' /> 
                </div>
                    : 
                <div></div>
                }
            </div>
        )
    }
}

export default SearchType; 