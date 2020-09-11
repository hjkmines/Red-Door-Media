import React, { Component } from 'react'; 
import Navbar from './Navbar'; 
import youtube from '../api/youtube'; 
import YoutubeListResults from './YoutubeListResults'; 
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'; 


class YoutubeResult extends Component {

    // state = { 
    //     videos: []
    // }

    // componentDidMount() {
    //     this.onYoutubeSearch() 
    // }

    // onYoutubeSearch = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term 
    //         }
    //     })

    //     this.setState({ videos: response.data.items })
    // }

    // render() {
    //     return (
    //         <div>
    //             <Navbar onYoutubeSearch={this.onYoutubeSearch} />
    //             <div>
    //                 <YoutubeListResults videos={this.state.videos} /> 
    //             </div>
    //         </div>
    //     )
    // }

    state = { videos: [], selectedVideo: null }; 

    componentDidMount() {
        this.onTermSubmit('buildings'); 
    }

    onTermSubmit =  async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term         
            }
        })

        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0] 
        })
    }; 

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render() {
        return (
            <div className='ui container'>
              <SearchBar 
                onTermSubmit={this.onTermSubmit} 
              />
              <div className='ui grid'>
                <div className='ui row'>.
                 <div className='eleven wide column'>
                  <VideoDetail 
                    video={this.state.selectedVideo}    
                  />
                 </div>
                 <div className='five wide column'>
                  <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={this.onVideoSelect}    
                  /> 
                 </div>
              </div>
              </div>
            </div>
        ); 
    }
}; 

export default YoutubeResult; 