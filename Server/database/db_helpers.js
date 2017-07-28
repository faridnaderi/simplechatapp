
const MongoClient = require('mongodb').MongoClient

function findInCollection(collection,query,callback){ 
    MongoClient.connect('mongodb://admin:Qwer123$@homelike-shard-00-00-p7td4.mongodb.net:27017,homelike-shard-00-01-p7td4.mongodb.net:27017,homelike-shard-00-02-p7td4.mongodb.net:27017/simplechatapp?ssl=true&replicaSet=homelike-shard-0&authSource=admin', function (err, db) {
        if (err) {
            callback(err)
            return   
        } 
        db.collection(collection).find(query).toArray(function(err, docs){
            callback(err,docs)
            db.close()
        })
    }); 
}

module.exports = {
    findInCollection,
    handleError:function(err){
        if(err){
            console.log('Database Error:',err)
            return true
        }
        return false
    }
}