import React from 'react'   
import style from './chatwindow.scss'  

export default class ChatWindow extends React.Component { 
    constructor(props){ 
        super(props) 
       
    }
    render() {  
        var chats = this.props.messages.map(chat=>{
            return(
                <div className="chat-message"  key={chat.id}> 
                    <img className="avatar"  src={chat.user.avatar} /> 
                    <div className="title">
                        {chat.user.name}
                        <small>{chat.date.toLocaleTimeString()}</small>
                    </div>
                    {chat.message}
                </div>
            )
        })
        return (
            <div className="chat-window" style={{bottom:this.props.inputHeight+50}}> 
                {chats} 
            </div>
        )
    }
} 