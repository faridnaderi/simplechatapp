 
// userId:1,
// name:'farid',
// lastname:'naderi',
// avatarUrl:'/uploads/user_avatars/1.jpg',
// myTodayMode:'I\'m Happy today'
var usersCollection = require('./collections/users')
var newsCollection = require('./collections/news')
module.exports = function(io){
    usersCollection.setIo(io);
    newsCollection.setIo(io);
    return {}
}