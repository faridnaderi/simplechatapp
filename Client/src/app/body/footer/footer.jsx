import React from 'react' 
import style from './footer.scss'
 
export default class Footer extends React.Component { 
    render() {
        return (
            <div className="footer"> 
                <div className="copyright">Designed & Developed by <span>Farid Naderi</span></div>
                <div className="version">version: 1.0.0</div>
            </div>
        )
    }
} 