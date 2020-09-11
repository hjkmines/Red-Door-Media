import React from 'react'; 
import './ImageResultList.css'

const ImageResultList = ({ images }) => {

    const renderedList = images.map( image => {
        return <img src={image.urls.regular} />
    })

    return (
        <div className='image-list'>
        {renderedList}
        </div>
    )
}; 

export default ImageResultList; 