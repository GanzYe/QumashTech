import React, {Component} from 'react';
import CoworkingMapImage from './images/Cowor.png'
import InfoBlockItem from '../infoBlockItem'
import InfoOfficeItem from '../InfoOfficeItem'
import './coworking-block.css'

export default class CoworkingBlock extends Component {
    AddinfoBlock = (type, office_num,area, max_people_amount, additional_opportunities) => {
        return (
            <div className="info-block-container" style = {{ border: '5px solid black'}}>
                <div className="type">Тип офиса: {type}</div>
                <div className="num">Номер офиса: {office_num}</div>
                <div className="area">Площадь: {area}</div>
                <div className="max_people">Макс. вместительность: {max_people_amount}</div>              
            </div>
        )
    }

    temp = {type: 'qwdqwd',office_num: 0, area: '0x0', max_people_amount: 10, additional_opportunities: "free wifi"}
    temp_1 = {type: '',office_num: 10, area: '10x10', max_people_amount: 10, additional_opportunities: "free wifi"}
    render() {
        let {officesData,onClickHandle} = this.props;
        const elements = officesData.map((item) => {
            const {id,...itemProps } = item;
            return (               
                <InfoBlockItem
                key={id}
               {...itemProps}
               onClickHandle={()=>onClickHandle(id)}
               />              
               
            )
        })
        const infoOffices = officesData.map((item) => {
            const {id,...itemProps } = item;
            return (               
              <InfoOfficeItem
              key={id}
              {...itemProps}
              />             
               
            )
        })
        return (
            <div className="coworking-container">
                <img className="coworking-map-image" src={CoworkingMapImage}  alt="coworking_map"/>
                {elements}
                {infoOffices}
            </div>
        )
    }
}