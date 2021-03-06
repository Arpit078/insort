import React, { Component } from "react";
import "./NewsItem.css"

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="box">
        <div className="">
        <img src={!imageUrl?null:imageUrl} className="card-img-top" style={{width:"fit",alignItems:"center",filter:"contrast(160%) grayscale(100%) "}} alt="fuck deployment"></img>

          <h5 className="">{title}</h5>
          <p className="">
            {!description?null:description}
          </p>
             
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn-change7 btn btn-sm">Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
