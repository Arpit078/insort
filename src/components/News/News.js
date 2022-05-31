import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../loadingSpinner/loadingSpinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0e8907b27b44df4aa19103a6c0e4aac`
    // let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({loading:false})

    // this.setState({articles : parsedData.results})
    this.setState({articles : parsedData.articles})
  }
  render() {
    return (
      
      <div className="container my-3">
      
        {this.state.loading && <Spinner/>}
        <h1 className="text-center">Top Headlines</h1>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
             return <div key={element.url}>
             <NewsItem
               title={element.title}
               description={element.description}
               imageUrl={element.urlToImage}
               newsUrl={element.url}
      />
           </div>
          })}
         
        </div>
      </div>
    );
  }
}

export default News;
