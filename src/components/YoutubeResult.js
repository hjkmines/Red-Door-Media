import React, { Component } from 'react'; 
import Navbar from './Navbar'; 
import youtube from '../api/youtube'; 
import './YoutubeResultList.css'
import YoutubeListResults from './YoutubeListResults'; 

class YoutubeResult extends Component {

 state = { 
        videos: []
    }

    componentDidMount() {
        this.onYoutubeSearch() 
    }

    onYoutubeSearch = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term 
            }
        })

        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div>
                <Navbar onYoutubeSearch={this.onYoutubeSearch} />
                <div className='videos'>
                    <YoutubeListResults videos={this.state.videos} className='videos' /> 
                </div>
            </div>
        )
    }

}; 

export default YoutubeResult; 