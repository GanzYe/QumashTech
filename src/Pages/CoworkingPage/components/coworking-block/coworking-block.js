import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */
import CoworkingMapImage from './images/coworking_map.png'

import './coworking-block.css'

export default class CoworkingBlock extends Component {
    render() {
        return (
            <div className="coworking-container">
                <img className="coworking-map-image" src={CoworkingMapImage}  alt="coworking_map"/>
                <div className='office_1' onClick={()=> console.log('office_1')}></div>
                <div className='office_2' onClick={()=> console.log('office_2')}></div>
                <div className='office_3' onClick={()=> console.log('office_3')}></div>
                <div className='office_4' onClick={()=> console.log('office_4')}></div>
                <div className='office_5' onClick={()=> console.log('office_5')}></div>
                <div className='office_6' onClick={()=> console.log('office_6')}></div>
                <div className='office_7' onClick={()=> console.log('office_7')}></div>
                <div className='office_8' onClick={()=> console.log('office_8')}></div>
                <div className='office_9' onClick={()=> console.log('office_9')}></div>
                <div className='office_10' onClick={()=> console.log('office_10')}></div>
            </div>
        )
    }
}