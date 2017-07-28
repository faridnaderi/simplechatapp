import React from 'react'
import style from './leftsidebar.scss'
import AppData from '../../data' 

import Header from './header/header.jsx'
import UserData from './userdata/userdata.jsx'
import Breadcrumb from './breadcrumb/breadcrumb.jsx'
import Channels from './channels/channels.jsx'
import NewChat from './newchat/newchat.jsx'
import Footer from './footer/footer.jsx'
 
export default class LeftSideBar extends React.Component { 
    render() {
        return (
            <div className="left-side-bar"> 
                <Header />
                <UserData userData={AppData.user} /> 
                <Channels />
                <NewChat />
                <Footer />
            </div>
        )
    }
} 