import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import './block.css'

export default class Block extends Component {

    render() {
       const {blockName} = this.props; 
       let polygonParams = {
           'F':"polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9% 51%)"
       };
        return (
            <div className="content_container">
                    <div className="block_container">
                        <div className="res_block" style={{
                                "clipPath": polygonParams[blockName]
                        }}>
                        <div className="coworking_block" onClick={()=>console.log('test')}><i className="fas fa-chair"></i></div>
                        </div>
                        <div className="sport_block" onClick={()=>console.log('test')}><i className="fas fa-futbol"></i></div>
                    </div>
                </div>
     
     )

    }

}