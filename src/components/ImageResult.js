import React, { Component } from 'react'; 
import unsplash from '../api/unsplash'; 
import Navbar from './Navbar'; 
import ImageResultList from './ImageResultList'; 

class ImageResult extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        this.onImageSearch()
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

    render () {
        return (
            <div>
                    <Navbar onImageSearch={this.onImageSearch} />
                <div className='images'> 
                    <ImageResultList images={this.state.images} className='images' /> 
                </div>
            </div>
        )
    }
}; 

export default ImageResult; 