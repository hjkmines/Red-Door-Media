import React, { Component } from 'react'; 
import LogIn from './LogIn'; 
import Home from './Home';
import NewsResults from './NewsResult';
import YoutubeResult from './YoutubeResult'; 
import ImageResult from './ImageResult'; 
import SearchType from './SearchType'; 

class App extends Component {

    state = {
        onSearchSumbit: 'yes'
    }

    onSearchSubmit = () => {
        this.setState({onSearchSubmit: 'yes'})
    }

    goHome = () => {
        this.setState({ onSearchSubmit: 'no' })
    }

    render() {
        return (
            <div>
            { this.state.onSearchSumbit === 'no' ? <Home /> : <SearchType onSearchSubmit={this.onSearchSubmit} /> }
               
            </div>
        )
    }
} 

export default App; 