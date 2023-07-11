import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../loadingSpinner/loadingSpinner";
import "./News.css"
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0e8907b27b44df4aa19103a6c0e4aac&pageSize=7`
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b0e8907b27b44df4aa19103a6c0e4aac&pageSize=7`
    // let url = `http://localhost:5000/${this.props.category}`
    let url = `https://insort-api.onrender.com/${this.props.category}`
    
    // let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}`
    this.setState({loading:true})
    fetch(url,{mode: 'cors'})
      .then(res => res.json())
      .then(json =>{
        this.setState({
          loading:false,
          articles:json.articles
        })
      })

    // this.setState({articles : parsedData.results})
      console.log(this.state.articles)

  }
  render() {
    return (
      <div>
        
               <h1 className="text-center">{this.props.category}</h1>

      <div className="flex-box my-3">
        {this.state.loading && <Spinner className="text-center"/>}
          {!this.state.loading && this.state.articles.map((element)=>{
            return <section key={element.url} className={element.count + " scroll"} >
            {/* return <div key={element.link}> */}
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.imageUrl}
              
               //  imageUrl={element.image_url}
                newsUrl={element.newsUrl}
               //  newsUrl={element.link}
       />
              
               
              </section> 
            
             
           
          })}
         
      </div>
      </div>
    );
  }
}

export default News;
