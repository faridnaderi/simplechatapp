import React from 'react'    
import style from './home.scss'
import Loading from '../../shared/loading/loading.jsx'
import AppData from '../../data'

export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            gettingNews:true,
            news:[]
        }
        AppData.socket.emit('news:getNews');
        AppData.socket.on('news:getNews_success',this.onRecievedNews.bind(this))
  
    } 
    onRecievedNews(news){
        console.log(news)
        this.setState({news,gettingNews:false})
    }
    render() {
        let news = <Loading fullSize="false" /> 
        if(this.state.gettingNews===false){
            news = '';
        }
        if(this.state.news.length>0 ){
            news =  this.state.news.map((newsItem,index)=> 
                <div key={index} className="news-item">
                    <span className="date">{this.toShortDatetime(newsItem.date)}</span>
                    {this.linebreakToBr(newsItem.content)}
                </div>
            )
        }
        return (
            <div> 
               <h1>SimpleChat App</h1>
                <p>
                    This application is a simple chat uses ReactJs for the front end and 
                    NodeJs,ExpressJs,Socket.Io and MongoDb for the back end.
                    
                </p>
                {news}
            </div>
        )
    }

    toShortDatetime(date){
        return date.replace('T',' ').substr(0,date.indexOf('.'))
    }
    linebreakToBr(string){
        return string.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
        })
    }
} 