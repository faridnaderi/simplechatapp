var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http) 
var database = require('./database')(io) 
app.get('/uploads/user_avatars/*', function(req, res){
    var options = {
        root: __dirname + '/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    res.sendFile(req.path, options, function (err) {
        if (err) {
             res.sendFile('/uploads/user_avatars/default.png', options);
        }  
    })
}) 
app.get('/', function(req, res){ 
    //res.sendFile(__dirname + '/client/dist/index.html');
    res.redirect('http://localhost:8080');
})
http.listen(3000, function(){
  console.log('listening on *:3000');
})
 
io.on('connection', function(socket){ 
    console.log('in server collection : '+socket.id)  
    socket.emit(':connected',socket.id) 
})  