import React, { Component } from 'react'; 

const Slide = ({ slides }) => {

    const firstArticle = slides.slice(0,1)
    const remaining10Articles = slides.slice(1,11)

    const firstArticledRendered = firstArticle.map( article => {
        return (
            <div className='carousel-item active'>
                <div id='text-links'>
                    <a id='linkers' href={article.url}>
                        {article.title}
                    </a>
                </div>
            </div>
        )
    }) 

    const remainingArticlesRendered = remaining10Articles.map( article => {
        return (
            <div className='carousel-item'>
                <div id='text-links'>
                    <a id='linkers' href={article.url}>
                        {article.title}
                    </a>
                </div>
            </div>
        )
    })

    return (
        <div>
            {firstArticledRendered}
            {remainingArticlesRendered}
        </div>
    )
}

export default Slide; 