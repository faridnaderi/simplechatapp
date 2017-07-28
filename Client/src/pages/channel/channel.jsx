import React from 'react'  
import {Link} from 'react-router-dom' 
import ChatInput from './chatinput/chatinput.jsx'
import ChatWindow from './chatwindow/chatwindow.jsx'

export default class Channel extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            inputHeight:30,
            messages:[
                {
                    id:'asd',
                    user:{name:'ASSD asdasdsad',avatar:'https://randomuser.me/api/portraits/men/4.jpg'},
                    message : 'In this example, Array.map iterates through every item contained in items and executes a function that returns a DOM element. (Technically, it’s a virtual DOM element, but that’s a differen',
                    date: new Date()
                }
            ]
        }
 
        this.handleChatInputResize = this.handleChatInputResize.bind(this)
        this.updateMessages = this.updateMessages.bind(this)
    }
    updateMessages(message){ 
        this.state.messages.push({
                id:'as1d'+Math.random(),
                user:{name:'Fered',avatar:'https://randomuser.me/api/portraits/men/4.jpg'},
                message,
                date: new Date()
            })
        this.setState({inputHeight:30, messages: this.state.messages })   
    }
    handleChatInputResize(message,offsetWidth){ 
        let charactersPerLine = Math.floor( offsetWidth / 8.5)
        this.setState({inputHeight: Math.floor(message.length / charactersPerLine)*17 + 30 })  
    }
    render() { 
        return (
            <div>  
                <ChatWindow messages={this.state.messages} inputHeight={this.state.inputHeight} />
                <ChatInput updateMessages={this.updateMessages} resizeHandler={this.handleChatInputResize} inputHeight={this.state.inputHeight} />
            </div>
        )
    }
} 