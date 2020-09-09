import React, { Component } from 'react'; 

class SearchBar extends Component {

    state = { term: '', type: 'News' }

    onChange = (event) => {
        this.setState({ 
            term: event.target.value 
        })

        console.log(this.state.term)
    }

    onSelect = (event) => {
        this.setState({
            type: event.target.value
        })

        console.log(this.state.type)
    }

    render() {
        return (
            <div>
                <select value={this.state.type} onChange={this.onSelect}>
                    <option value='News'>News</option>
                    <option value='Videos'>Videos</option>
                    <option value='Images'>Images</option>
                </select>
                <input className="form-control mr-sm-2" type="search" placeholder="Explore" aria-label="Search" onChange={this.onChange} />
                <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
            </div> 
        )
    }
}; 

export default SearchBar; 