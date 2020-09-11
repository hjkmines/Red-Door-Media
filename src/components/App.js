import React, { Component } from 'react'; 
import LogIn from './LogIn'; 
import Home from './Home';
import NewsResults from './NewsResult';

class App extends Component {

    render() {
        return (
            <div>
                {/* <Home /> */}
                <NewsResults /> 
            </div>
        )
    }
} 

export default App; 