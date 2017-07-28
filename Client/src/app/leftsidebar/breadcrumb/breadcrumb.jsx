import React from 'react' 
import style from './breadcrumb.scss'
import  { Switch , Route } from 'react-router-dom' 
 
export default class Channels extends React.Component { 
    constructor(props){
        super(props) 
        this.getChannelName = this.getChannelName.bind(this)
    }
    getChannelName(){
        return location.pathname.replace('/','')
    }
    render() { 
        return (
            <div className="breadcrumb"> 
                <ul>
                    <li><span className="fa fa-home"></span></li>
                    <Switch>
                        <Route exact path='/' render={()=><li>Home</li>}/> 
                        <Route exact path='/myprofile' render={()=><li>My Profile</li>}/>
                        <Route exact path='/users' render={()=><li>Users</li>}/>
                        <Route exact path='/settings' render={()=><li>Settings</li>}/>
                        <Route exact path='/feedback' render={()=><li>Feedback</li>}/>
                        <Route exact path='/:channelName' render={()=><li>@{this.getChannelName()}</li>}/>   
                    </Switch> 
                </ul>
                <button className="btn" title="Add Channel"><span className="fa fa-plus"></span></button>
            </div>
        )
    }
} 
                