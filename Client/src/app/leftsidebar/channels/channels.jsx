import React from 'react' 
import style from './channels.scss'
import {Link} from 'react-router-dom'
import Events from '../../../events'
import UserObject from '../../../user' 
 
export default class Channels extends React.Component { 
    constructor(props){ 
        super(props) 
        this.state={
            dots : '.',
            show:true,
            channels:[]
        }
        this.loadingDots        = this.loadingDots.bind(this) 
        this.onAddButtonClick   = this.onAddButtonClick.bind(this) 

        Events.on('cancelButtonClicked',this.onCancelButtonClicked.bind(this))
        Events.on('createChannel',this.onCreateChannel.bind(this))
    }
    render() {   
         
        var channels = <li className="empty-channels"><a>You didn't join any channel yet.</a></li>
        if(this.state.channels.length>0){
            channels = this.state.channels.map((channel,channelIndex)=>{
                return( 
                    <li key={channelIndex}>
                        <Link to={`/`+this.toURL(channel.name)}>{channel.name}</Link> 
                        <div className={("is-typing ") + (channel.users.length>0 ? "show" : "") }>
                            <ul>
                                {channel.users.map((userData,index)=>{
                                    
                                    return( <li key={index}><img src={UserObject(userData).getAvatarUrl()} /></li>)
                                })}
                                 
                            </ul> 
                        </div>
                    </li>
                )
            })
        }
        return (
            <div className={("channels ")+(this.state.show?'show':'')}> 
                <h1  className="leftsidebar-headline"><span className="fa fa-comments-o"></span> Channels 
                    <button className="btn" title="Add Channel" onClick={this.onAddButtonClick}><span className="fa fa-plus"></span></button>
                </h1>
                <ul>
                    {channels} 
                </ul>
            </div>
        )
    }

    
    toURL(str){
        return str.replace(/ /g,'-').toLowerCase()
    }
    loadingDots(){
        let dots = this.state.dots+'.'
        if(dots.length>5){
            dots = '.'
        }
        this.setState({dots:dots})
        setTimeout(this.loadingDots,200)
    }
    onAddButtonClick(){
        this.setState({show:false})
        Events.call('newChatButtonClicked')
    }
    onCancelButtonClicked(){
        this.setState({show:true})
    }
    onCreateChannel(channel){ 
        this.state.channels.push(channel) 
        this.setState({channels:this.state.channels})
    }
} 