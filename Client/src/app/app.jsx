import React from 'react'
import SocketIOClient from 'socket.io-client'
import User from '../user'
import AppData from '../data'
import Events from '../events'
import LeftSideBar from './leftsidebar/leftsidebar.jsx'
import MainBody from './body/body.jsx'
import Login from '../pages/login/login.jsx'
import style from './app.css'
 

export default class App extends React.Component { 
    constructor(props) {
        super(props) 
        // Creating the socket-client instance , this will also automatically connect to the server.
        AppData.socket =SocketIOClient(AppData.ServerURL)
        AppData.socket.on(':connected',this.onClientConnect)
        Events.on('loginSuccess',this.onLoginSuccess.bind(this))
        Events.on('hideLoginPanel',this.hideLoginPageAfterAnimation.bind(this))
        this.state={
            showApp:false,
            showLoginPage:true,
        }
    };
    onClientConnect(socketId){  
        AppData.socketId=socketId;
    }
    onLoginSuccess(userData){    
        AppData.user = User(userData);
        this.setState({showApp:true}) 
    }
    hideLoginPageAfterAnimation(){
        this.setState({showLoginPage:false})
    }
    render() {  
        let appLayout;
        if(this.state.showApp){
        appLayout = <div>
            <LeftSideBar />
            <MainBody />
        </div>
        }
        return ( 
            <div>
                {appLayout}
                {this.state.showLoginPage ? <Login  />:''}
            </div>
        );
    }
} 


 