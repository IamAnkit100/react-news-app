import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            {
                props.news.map((newsItem, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card h-100">
                                <img src={newsItem.urlToImage} className="card-img-top" alt="randomimg" style={{width :"100%", height:"200px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{newsItem.title}</h5>
                                    <p className="card-text">{newsItem.description.slice(0,50)}</p>
                                    <a href={newsItem.url} target='_blank' className="btn btn-primary">Read More</a>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
