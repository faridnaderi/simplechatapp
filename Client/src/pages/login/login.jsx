import React from 'react'    
import {Link,Redirect } from 'react-router-dom' 
import AppData from '../../data'
import Events from '../../events'
import style from './login.scss'

export default class Login extends React.Component { 
    constructor(props){
        super(props)  
        this.state={
            message:'',
            loading:false,
            containerClass:'login',
            loggedIn:false
        }
        AppData.socket.on('users:login_success',this.onLoginSuccess.bind(this))
        AppData.socket.on('users:login_failed',this.onLoginFailed.bind(this))
         
    }
 
    onLoginSuccess(userData){  
        Events.call('loginSuccess',userData) 
        this.setState({loggedIn:true,loading:false})
        this.showLoginAnimation() 
        setTimeout(()=>{
            Events.call('hideLoginPanel',userData) 
        },1000)
    }
    onLoginFailed(){
         this.setState({message:<span className="message">
                <span className="fa fa-warning"></span> Invalid email or password.
            </span>,
        loading:false})
    }
    handleSubmit(){
        var email= this.emailInput.value
        var pass= this.passInput.value
        var message = null
        if(!email || !pass){
            message= <span className="message">
                <span className="fa fa-warning"></span> Please enter your email and password.
            </span>
             
        } else{
            message= <span className="message">
                    <span className="fa fa-refresh fa-spin"></span> Please wait
                </span>
            AppData.socket.emit('users:login',{email,pass}) 
            this.setState({loading:true})
        }
        this.setState({message})
    }
    render() { 
        return (
            <div className={this.state.containerClass}> 
                {this.state.loggedIn ? <Redirect to='/'/>:''}
                <img src="/dist/images/logo.png" />
                <div className="form">

                    {this.state.message}

                    <div className="email">
                        <input type="text" disabled={this.state.loading}  placeholder="Email Address" 
                        ref={(email) => { this.emailInput = email }} />
                    </div>
                    <div className="password">
                        <input type="password" disabled={this.state.loading}   placeholder="****"
                             ref={(pass) => { this.passInput = pass }}
                        /> 
                    </div>
                    <small className="forgot-pass">Forgot your passowrd?</small>
                    <button disabled={this.state.loading} onClick={this.handleSubmit.bind(this)}>Submit <span className="fa fa-chevron-circle-right"></span></button>
                </div>
            </div>
        )
    }

    showLoginAnimation(){
        this.state.containerClass += " success"
        this.setState({containerClass:this.state.containerClass})
        this.createAnimationTimeout("animate-logo",500) 
        this.createAnimationTimeout("fade",700)  
    }

    createAnimationTimeout(classname,ms){ 
        setTimeout(function(){
            this.state.containerClass += " "+classname
            this.setState({containerClass:this.state.containerClass})  
        }.bind(this),ms)
    }
}  