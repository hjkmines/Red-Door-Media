import React, { Component } from 'react'; 
import Navbar from './Navbar'; 
import news from '../api/news'; 
import NewsListResults from './NewsListResults'; 

class NewsResults extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        this.onNewsSearch() 
    }

    onNewsSearch = async (term) => {
        const response = await news.get('/everything', {
            params: {
                q: term, 
                apiKey: '2a717d771d85444cb9cb8eda83414b88'
            }
        })

        this.setState({ news: response.data.articles })
    }

    render() {
        return (
            <div>
                    <Navbar onNewsSearch={this.onNewsSearch} />
                <div className='news-results'>
                    <NewsListResults news={this.state.news} /> 
                </div>
            </div>
        )
    }
}; 

export default NewsResults; 