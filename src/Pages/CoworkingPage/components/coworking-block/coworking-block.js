import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CoworkingMapImage from './images/coworking_map.png'
import InfoBlock from '../info-block'
import './coworking-block.css'

export default class CoworkingBlock extends Component {

    AddinfoBlock = (type, office_num,area, max_people_amount, additional_opportunities) => {
        return (
            <div className="info-block-container" style = {{ border: '5px solid black'}}>
                <div className="type">Тип офиса: {type}</div>
                <div className="num">Номер офиса: {office_num}</div>
                <div className="area">Площадь: {area}</div>
                <div className="max_people">Макс. вместительность: {max_people_amount}</div>
                <div className="add_opp">Дополнительные услуги: {additional_opportunities}</div>
            </div>
        )
    }


    render() {
        let num_office = 1;
        let {officesData} = this.props;
       // console.log(officesData)
        return (
            <div className="coworking-container">
                <img className="coworking-map-image" src={CoworkingMapImage}  alt="coworking_map"/>
                <div className='office_1' onClick={()=> {
                    num_office = 1;
            }}></div>
                <div className='office_2'>
                </div>
                <div className='office_3' onClick={()=> console.log('office_3')}></div>
                <div className='office_4' onClick={()=> console.log('office_4')}></div>
                <div className='office_5' onClick={()=> console.log('office_5')}></div>
                <div className='office_6' onClick={()=> console.log('office_6')}></div>
                <div className='office_7' onClick={()=> console.log('office_7')}></div>
                <div className='office_8' onClick={()=> console.log('office_8')}></div>
                <div className='office_9' onClick={()=> console.log('office_9')}></div>
                <div className='office_10' onClick={()=> console.log('office_10')}></div>
                <InfoBlock info = {officesData[num_office - 1]}/>
            </div>
        )
    }
}