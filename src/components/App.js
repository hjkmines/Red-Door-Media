import React, { Component } from 'react'; 
import LogIn from './LogIn'; 
import Home from './Home';
import NewsResults from './NewsResult';
import YoutubeResult from './YoutubeResult'; 

class App extends Component {

    render() {
        return (
            <div>
                {/* <Home /> */}
                {/* <NewsResults />  */}
                <YoutubeResult /> 
            </div>
        )
    }
} 

export default App; 