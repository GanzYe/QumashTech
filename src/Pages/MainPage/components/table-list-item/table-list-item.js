import React,{Component} from 'react';
import './table-list-item.css'

export default class TableListItem extends Component{

    
    render(){
        const {title,address,url} = this.props;
        console.log(title,address,url);
        return(
            <div className="d-flex align-items-center block">
             <img src={url} alt=""/>
            <div className='text'>
                <h3>{title}</h3>
                <p>{address}</p>  
            </div>
        </div>
        )
    }
}