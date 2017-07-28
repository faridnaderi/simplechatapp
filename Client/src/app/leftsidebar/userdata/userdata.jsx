import React from 'react' 
import style from './userdata.scss' 
export default class UserData extends React.Component {  
    constructor(props){ 
        super(props)   
    }
    render() {   
        return (
           
            <div className="user-data-container"> 
                <div className="avatar" style={{backgroundImage:'url(' +this.props.userData.getAvatarUrl()+ ')'}}></div>
                <div className="user-name">
                    {this.props.userData.getFullName() }
                    <small><span className="fa fa-comment"></span> {this.props.userData.getTodayMode() ? this.props.userData.getTodayMode() : <span>Nothing much</span>}</small> 
                </div> 
            </div>
        )
    }
} 
                

            