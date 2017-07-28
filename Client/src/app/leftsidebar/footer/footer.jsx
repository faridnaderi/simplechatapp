import React from 'react' 
import {Link} from 'react-router-dom' 
import style from './footer.scss'
 
export default class Footer extends React.Component { 
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><Link to={`/myprofile`} title="My Profile"><span className="fa fa-fw fa-user"></span></Link></li>
                    <li><Link to={`/users`} title="View Users"><span className="fa fa-fw fa-users"></span></Link></li>
                    <li><Link to={`/settings`} title="Settings"><span className="fa fa-fw fa-gear"></span></Link></li>
                    <li><Link to={`/feedback`} title="Help & Feedback"><span className="fa fa-fw fa-info-circle"></span></Link></li>
                </ul> 
            </div>
        )
    }
}  