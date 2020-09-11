import React, { Component } from 'react'; 
import LogIn from './LogIn'; 
import Home from './Home';
import NewsResults from './NewsResult';
import YoutubeResult from './YoutubeResult'; 
import ImageResult from './ImageResult'; 

class App extends Component {

    render() {
        return (
            <div>
                {/* <Home /> */}
                {/* <NewsResults />  */}
                {/* <YoutubeResult />  */}
                <ImageResult />
            </div>
        )
    }
} 

export default App; 