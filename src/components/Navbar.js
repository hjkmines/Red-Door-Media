import React, { Component } from 'react';
import SearchBar from './SearchBar'; 

class Navbar extends Component {

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <a className="navbar-brand" href="./home.html"><strong id="brand">RedDoor Media 🚪</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./news.html">News <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./videos.html">Videos<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./images.html">Images <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./favorites.html">Favorites <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./upload.html">Upload <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="./index.html">Log Out <span className="sr-only">(current)</span></a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <SearchBar onSearch={this.props.onSearch} /> 
              </form>
            </div>
        </nav>
        )
    }
}

export default Navbar; 