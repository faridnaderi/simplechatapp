var database = require('../db_helpers')
var collectionName = 'users'

// {email:'fnaderi82@gmail.com',pass:'1234',name:'farid',lastname:'naderi',avatarUrl:'/uploads/user_avatars/1.jpg',myTodayMode:'I\'m Happy today'}



module.exports = {  
    setIo:function(io){
        io.on('connection', function(socket){  
            socket.on('users:login',onLogin.bind(socket))
            socket.on('sidebar:getUsers',onGetUsers.bind(socket))
        })  
    }
} 


function onLogin(data){ 
    database.findInCollection(collectionName,data,function(err,results){ 
        if(database.handleError(err)){
            return
        }
        if(results.length===1){
            this.emit('users:login_success',results[0])
        } else {
            this.emit('users:login_failed')
        }
    }.bind(this))       
}

function onGetUsers(){ 
    database.findInCollection(collectionName,{},function(err,results){ 
        if(database.handleError(err)){
            return
        }
        this.emit('sidebar:userListReceived',results)
    }.bind(this))       
}