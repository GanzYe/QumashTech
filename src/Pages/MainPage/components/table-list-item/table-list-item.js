import React,{Component} from 'react';
import './table-list-item.css'
import {Link} from 'react-router-dom';

export default class TableListItem extends Component{

    
    render(){
        const {title,address,url} = this.props;
        console.log(title,address,url);
        if(title==="Bi City Seoul"){
            return(
                <Link to="/rc">             
                    <div className="d-flex align-items-center block">
                    <img className="rcImg" src={url} alt=""/>
                    <div className='text'>
                        <h4>{title}</h4>
                        <p>{address}</p>  
                    </div>
                    </div>
                </Link>
            )
        }
        else{
            return(          
                    <div className="d-flex align-items-center block">
                    <img className="rcImg" src={url} alt=""/>
                    <div className='text'>
                        <h4>{title}</h4>
                        <p>{address}</p>  
                    </div>
                    </div>
            )
        }
    }
}