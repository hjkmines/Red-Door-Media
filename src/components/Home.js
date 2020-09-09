import React, { Component } from 'react';
import Navbar from './Navbar'; 
import Carousel from './Carousel'; 

class Home extends Component {
    render() {
        return (
        <body className='body'>
            <Navbar /> 
            <Carousel /> 
        </body>
        )
    }
}

export default Home; 