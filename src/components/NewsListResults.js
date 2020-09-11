import React from 'react'; 

const NewsListResults = ({ news }) => {
    // const top5Articles = news.slice(0, 25); 

    const renderedList = news.map( article => {
        return (
            <div className='card news-card' >
                <img className="card-img-top news-picture" src={article.urlToImage} alt="image" />
                <div className="card-body">
                    <h6 className="card-title">{article.title}</h6>
                    <div className='buttons'>
                    <section className="article-button"><a href={article.url} className="btn btn-primary">Go to full article</a></section>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}; 

export default NewsListResults; 