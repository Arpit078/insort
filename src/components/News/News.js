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
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0e8907b27b44df4aa19103a6c0e4aac&pageSize=7`
    // let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({loading:false})

    // this.setState({articles : parsedData.results})
    this.setState({articles : parsedData.articles})
    let numbers = ["one","two","three","four","five","six","seven"]
    for(let i =0;i<7;i++){
      this.state.articles[i].author = numbers[i]
      // this.setState(articles[i].author = numbers[i])
    }
    this.setState({articles : this.state.articles})
    console.log(this.state.articles)

  }
  render() {
    return (
      
      <div className="flex-box my-3">
      
        {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.articles.map((element)=>{
            var img = element.urlToImage
            if(element.author === "two"||element.author === "three"||element.author === "six"){
            return <div key={element.url} className={element.author}>
            {/* return <div key={element.link}> */}
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
              
               //  imageUrl={element.image_url}
                newsUrl={element.url}
               //  newsUrl={element.link}
       />
              
               
              </div> }
              else{
                return <div key={element.url} className={element.author}>
                  <NewsItem title={element.title}
                  description={element.description}
                  newsUrl={element.url}/>
                  
                  </div>
  
              }
             
           
          })}
         
      </div>
    );
  }
}

export default News;
