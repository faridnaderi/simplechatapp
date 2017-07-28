import React from 'react'   
import style from './chatinput.scss'  

export default class ChatInput extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            message: '' 
        } 
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSendMessage = this.handleSendMessage.bind(this) 
    }
    sendMessage(){ 
        this.props.updateMessages(this.state.message)
        this.messageInput.value = ''
        this.setState({message: ''}) 
    }
    handleSendMessage(event){ 
        if(event.key === 'Enter' && !event.shiftKey){
            this.sendMessage()
            return
        }
    }
    handleInputChange(event){  
        this.setState({message: this.messageInput.value}) 
        this.props.resizeHandler(this.messageInput.value,this.messageInput.offsetWidth)
         
    }
    render() { 
        return (
            <div className="chat-input" style={{height: this.props.inputHeight }}> 
                <button>
                    <span className="fa fa-paperclip"></span> 
                </button>
                <button>
                    <span className="fa fa-smile-o"></span> 
                </button>
                <textarea 
                    ref={(textarea) => { this.messageInput = textarea }}   
                    onChange={this.handleInputChange} 
                    onKeyUp={this.handleSendMessage}  
                    placeholder="Write a message..." 
                    value={this.state.message}></textarea>
                <button>
                    <span className="fa fa-paper-plane"></span> 
                </button>
            </div>
        )
    }
} 