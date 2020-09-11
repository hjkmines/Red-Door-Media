import React from 'react'; 

const TrendingNews = ({ news }) => {

    const top5Articles = news.slice(0, 6); 

    const renderedList = top5Articles.map( article => {
        return (
            <div className='card' >
                <img className="card-img-top news-picture" src={article.urlToImage} alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <section className="article-button"><a href={article.url} className="btn btn-primary">Go to full article</a></section>
                </div>
            </div>
        )
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default TrendingNews; 