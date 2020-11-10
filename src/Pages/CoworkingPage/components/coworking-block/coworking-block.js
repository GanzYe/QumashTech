import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CoworkingMapImage from './images/Cowor.png'
import InfoBlock from '../info-block'
import './coworking-block.css'

export default class CoworkingBlock extends Component {

    AddinfoBlock = (type, office_num,area, max_people_amount, additional_opportunities) => {
        return (
            <div className="info-block-container" style = {{ border: '5px solid black'}}>
                <p className="type">Тип офиса: {type}</p>
                <p className="num">Номер офиса: {office_num}</p>
                <p className="area">Площадь: {area}</p>
                <p className="max_people">Макс. вместительность: {max_people_amount}</p>
                <p className="add_opp">Дополнительные услуги: {additional_opportunities}</p>
            </div>
        )
    }

    temp = {type: 'qwdqwd',office_num: 0, area: '0x0', max_people_amount: 10, additional_opportunities: "free wifi"}
    temp_1 = {type: '',office_num: 10, area: '10x10', max_people_amount: 10, additional_opportunities: "free wifi"}
    render() {
        return (
            <div className="coworking-container">
                <img className="coworking-map-image" src={CoworkingMapImage}  alt="coworking_map"/>
                <div className='office office_1'></div>
                <div className='office office_2'></div>
                <div className='office office_3' onClick={()=> {
                    const obj = document.querySelector('.info-block-container');
                    const t = document.createElement('p');
                    t.textContent = `Тип офиса: ${this.temp.type}`;
                    obj.appendChild(t);
                }}></div>
                <div className='office office_4' onClick={()=> console.log('office_4')}></div>
                <div className='office office_5' onClick={()=> console.log('office_5')}></div>
                <div className='office office_6' onClick={()=> console.log('office_6')}></div>
                <div className='office office_7' onClick={()=> console.log('office_7')}></div>
                <div className='office office_8' onClick={()=> console.log('office_8')}></div>
                <div className='office office_9' onClick={()=> console.log('office_9')}></div>
                <div className='office office_10' onClick={()=> console.log('office_10')}></div>
                <div className='info_block'>
                    <h5>Информация</h5>
                    <p className="type"></p>
                    <p className="num"></p>
                    <p className="area"></p>
                    <p className="max_people"></p>
                    <p className="add_opportunities"></p>
                </div>
                <div className="btn btn-primary "></div>
            </div>
        )
    }
}