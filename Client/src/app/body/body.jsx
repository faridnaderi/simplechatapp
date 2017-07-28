import React from 'react' 
import  { Switch , Route } from 'react-router-dom'

import Home from '../../pages/home/home.jsx'
import MyProfile from '../../pages/myprofile/myprofile.jsx'
import UsersPage from '../../pages/users/users.jsx'
import Settings from '../../pages/settings/settings.jsx'
import Feedback from '../../pages/feedback/feedback.jsx'
import Channel from '../../pages/channel/channel.jsx'

import Footer from './footer/footer.jsx'
import style from './body.scss'
 
export default class MainBody extends React.Component { 
    render() {
        return (
            <div className="main-body"> 
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <Route exact path='/myprofile' component={MyProfile}/>
                    <Route exact path='/users' component={UsersPage}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route exact path='/feedback' component={Feedback}/>
                    <Route exact path='/:channelName' component={Channel}/>  
                </Switch>
                <Footer />
            </div>
        )
    }
} 