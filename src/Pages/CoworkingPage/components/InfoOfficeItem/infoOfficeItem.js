import React,{Component} from 'react';
import './infoOfficeItem.css'
export default class InfoOfficeItem extends Component{    
    render(){
        const {type,show} = this.props;
       // console.log(type);
        if(show===true){
            return(
                <div className="info_block">
                    <h5>Информация</h5>
                    <p>Тип офиса: {type.typeName}</p>
                    <p>Номер офиса: {type.office_num} </p>
                    <p>Площадь: {type.area}</p>
                    <p>Макс. вместительность: {type.max_people_amount}</p>                 
            </div>                
            )
        }
        else{
            return(
            null
            )
        }
      
    }
}