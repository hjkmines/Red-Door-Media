import React, { Component } from 'react'; 
import Navbar from './Navbar'; 
import youtube from '../api/youtube'; 
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
                <div>
                    <YoutubeListResults videos={this.state.videos} /> 
                </div>
            </div>
        )
    }
}; 

export default YoutubeResult; 