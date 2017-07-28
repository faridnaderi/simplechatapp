var database = require('../db_helpers')
var collectionName = 'news'

//{content:'news content',{ $currentDate: { date: true } }}
//db.news.insertOne({content:"SimpleChat APP was updated to version 1.0.17 \n— Bug fixes and other minor improvements \nFull version history is available here: https://somewebsite.or/changelog",{ $currentDate: { date: true}}}

function onGetNews(){ 
    database.findInCollection(collectionName,{},function(err,results){ 
       
        if(err){
            console.log('Database Error:',err)
            return
        }
        if(results.length>=1){
            this.emit('news:getNews_success',results)
        } else {
            this.emit('news:getNews_failed')
        }
    }.bind(this))       
}

module.exports = {  
    setIo:function(io){
        io.on('connection', function(socket){  
            socket.on('news:getNews',onGetNews.bind(socket))
        })  
    }
} 