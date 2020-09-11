import React from 'react'; 
import './ImageResultList.css'
import ImageCard from './ImageCard'; 

const ImageResultList = ({ images }) => {

    const renderedList = images.map( image => {
        return <ImageCard image={image} key={image.id} />
    })

    return (
        <div className='image-list'>
        {renderedList}
        </div>
    )
}; 

export default ImageResultList; 