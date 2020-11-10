import React, {Component} from 'react';
import CoworkingMapImage from './images/Cowor.png'
import InfoBlockItem from '../infoBlockItem'
import InfoOfficeItem from '../InfoOfficeItem'
import './coworking-block.css'

export default class CoworkingBlock extends Component {
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