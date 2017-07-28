import React from 'react' 
import {Link} from 'react-router-dom'
import style from './header.scss'
 
export default class Header extends React.Component { 
    render() {
        return (
            <div className="header"> 
                <Link to={`/`}><img src="/dist/images/logo.png" /></Link>
            </div>
        )
    }
} 