import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {
  articles=[
    {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
]

  
  constructor(props){
    super(props);
    this.state ={
      articles: [],
      loading: true,
      page:1
    }
    document.title = `${this.props.category} - Global News`;
  }

  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=064d435d4bfe489393f64c2d9ecc7be5&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true}) ; 
    let data= await fetch(url);
    this.props.setProgress(30);
     let parsedData = await data.json();
     this.props.setProgress(70);
     console.log(parsedData);
     this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

   handlePrevClick= async() =>{
    console.log("prev btn clicked");
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=064d435d4bfe489393f64c2d9ecc7be5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) ; 
    let data= await fetch(url);
    this.props.setProgress(30);
     let parsedData = await data.json();
     this.props.setProgress(70);
     console.log(parsedData);
     
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
    this.props.setProgress(100);
  }

  handleNextClick = async() => {
    console.log("next btn clicked");
    if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
      this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=064d435d4bfe489393f64c2d9ecc7be5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) ;
    let data= await fetch(url);
    this.props.setProgress(30);
     let parsedData = await data.json();
     this.props.setProgress(70);
     console.log(parsedData);
     
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });
  }
  this.props.setProgress(100);
  }

  render() {
    return (
      <>
       <div className='container my-3'>
        <h2 className='text-center' style={{marginTop:'70px'}}>Global News - Top Headlines from {this.props.category} category</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((elm) => {
                return <div className='col-md-4' key={elm.url}>
                  <NewsItem  title={elm.title?elm.title.slice(0,40):""} description={elm.description?elm.description.slice(0,80):""} 
                  imageUrl={elm.urlToImage ? elm.urlToImage: "https://images.livemint.com/img/2022/10/31/600x338/dividend_stock_1667209142877_1667209143143_1667209143143.jpg"} 
                  newsUrl={elm.url} author={elm.author} date={elm.publishedAt}/>
                  </div>
                })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
 
      </div>
      </>
     
    )
  }
}

export default News
