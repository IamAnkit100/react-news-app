import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

export default function News(props) { 
    const [news, setNews] = useState([])
    const [ isLoading, setIsLoading ] = useState(true);
    const apiKey="d2e745c18afe4c35a37bb9a0a97d9614";
    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=${apiKey}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.articles)
                setNews(data.articles)
                setIsLoading(false);
            })
    },[props.category])

    return (
        <> 
            <div className="container my-4">
            {isLoading ? <p>Loading...</p> : 

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-3">
                <NewsItem news={news} />
            </div>
            
            }
               
            </div>

        </>
    )
}
