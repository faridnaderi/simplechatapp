import React from 'react'    
import style from './loading.scss' 

export default class Loading extends React.Component {  
    render() { 
        return (
            <div className="loading"> 
               <img src="/dist/images/loading.png" />
               <h5> Please Wait</h5>
            </div>
        )
    }
} 