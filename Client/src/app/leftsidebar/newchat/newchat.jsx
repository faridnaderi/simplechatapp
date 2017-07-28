import React from 'react' 
import style from './newchat.scss' 
import UserData from '../userdata/userdata.jsx'
import Events from '../../../events'
import AppData from '../../../data' 
import UserObject from '../../../user' 
 
export default class NewChat extends React.Component { 
    constructor(props){ 
        super(props)  
        this.state={
            users:[],
            show:false
        }

        this.resetSelectedUsers         = this.resetSelectedUsers.bind(this)
        this.onCancelButtonClick        = this.onCancelButtonClick.bind(this)    
        this.onUserClicked              = this.onUserClicked.bind(this) 
        this.onCreateChannelButtonClick = this.onCreateChannelButtonClick.bind(this)
        this.getSelectedUsers           = this.getSelectedUsers.bind(this)

        Events.on('newChatButtonClicked',this.onNewChatButtonClicked.bind(this))
        AppData.socket.emit('sidebar:getUsers')
        AppData.socket.on('sidebar:userListReceived',this.onUserListReceived.bind(this))
    }
    
    render() {   
        var users = this.state.users.map((user,index)=>{
            return( 
                <li key={index}  onClick={() => this.onUserClicked(index)}  className={(user.selected ? 'selected':'')}> 
                     <UserData userData={UserObject(user)} />
                </li>
            )
        })
        return (
            <div className={("newchat-users ")+(this.state.show?'show':'')}> 
                <h1 className="leftsidebar-headline"><span className="fa fa-users"></span> Select persons 
                    <button className="btn" title="Cancel" onClick={this.onCancelButtonClick}><span className="fa fa-ban"></span></button>
                </h1>
                <div className="leftsidebar-headline channel-form">
                    <input ref="channelName" placeholder="channel name" />
                    <button className="btn" title="Create new channel" onClick={this.onCreateChannelButtonClick}><span className="fa fa-plus"></span> Create</button>
                </div>
                <ul>
                    {users} 
                </ul>

            </div>
        )
    }
    onUserClicked(index){ 
        if(!this.state.users[index]){
            return
        }
        if(this.state.users[index].selected===undefined){
            this.state.users[index].selected = false
        }
        this.state.users[index].selected = !this.state.users[index].selected
        this.setState({users:this.state.users})
    }
    onCancelButtonClick(){
        Events.call('cancelButtonClicked')
        this.resetSelectedUsers()
        this.setState({show:false})
    }
    onNewChatButtonClicked(){
        this.setState({show:true})
    }
    onUserListReceived(users){
        this.setState({users})
    }

    onCreateChannelButtonClick(){
        var data = {
            name:this.refs.channelName.value,
            users: this.getSelectedUsers()
        }
        Events.call('createChannel',data)
        AppData.socket.emit('sidebar:createNewChannel',data)
        
        this.onCancelButtonClick()
    }

    getSelectedUsers(){
        let users = []
        for(let index = 0;index<this.state.users.length;index++){
           
            if(this.state.users[index].selected){
                users.push(this.state.users[index])
            } 
        }
        return users
    }

    resetSelectedUsers(){  
        for(let index = 0;index<this.state.users.length;index++){
           
            this.state.users[index].selected = false
        }
        this.refs.channelName.value = ''
        this.setState({users:this.state.users})
    }
} 