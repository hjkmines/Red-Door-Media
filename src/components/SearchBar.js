import React, { Component } from 'react'; 

class SearchBar extends Component {

    state = { term: '', type: 'News' }

    onChange = (event) => {
        this.setState({ 
            term: event.target.value 
        })
    }

    onSelect = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault(); 

        // this.props.onSearchSubmit()
        this.props.mediaType(this.state.type)

        if (this.state.type === 'News') {
            this.props.onNewsSearch(this.state.term)
        } else if (this.state.type === 'Videos') {
            this.props.onYoutubeSearch(this.state.term)
        } else if (this.state.type === 'Images') {
            this.props.onImageSearch(this.state.term)
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.type} onChange={this.onSelect} className='form-control'>
                        <option value='News'>News</option>
                        <option value='Videos'>Videos</option>
                        <option value='Images'>Images</option>
                    </select>

                    <input className="form-control mr-sm-2" type="search" placeholder="Explore" aria-label="Search" onChange={this.onChange} />
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div> 
        )
    }
}; 

export default SearchBar; 