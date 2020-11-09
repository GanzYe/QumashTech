import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import './block.css'

export default class Block extends Component {


    render() {
        return (
            <div className="content_container" style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                    <div className="block_container" style ={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           width: '90%',
                           height: '70vh',
                           borderRadius: '10px',
                           background: 'linear-gradient(90deg, rgba(0,83,147,1) 0%, rgba(0,113,185,1) 100%)',
                           boxShadow:  '5px 5px 10px #a3a3a3, -5px -5px 10px #ffffff'
                    }}>
                        <div className="res_block" style={{
                                display: 'block',
                                width: '90%',
                                height: '80%',
                                'backgroundColor': '#E7E7E8',
                                'boxShadow':  "5px 5px 10px #a3a3a3, -5px -5px 10px linear-gradient(90deg, rgba(0,83,147,1) 0%, rgba(0,113,185,1) 100%)",
                                "clipPath": `polygon(${25}% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9% 51%)`
                        }}>
                        <div className="coworking_block" onClick={()=>console.log('test')} style={{
                                display: 'block',
                                width: '95px',
                                height: '100px',
                                'clipPath': 'polygon(79% 0, 100% 0, 88% 100%, 57% 100%)',
                                position: 'absolute',
                                'backgroundColor': '#ACA9A9'
                        }}></div>
                        </div>
                        <div className="sport_block" onClick={()=>console.log('test')} style={{
                                display: 'block',
                                position: 'absolute',
                                left: '200px',
                                background: '#ACA9A9',
                                width: '20%',
                                height: '20%',
                                borderRadius: '5px'
                        }}></div>
                    </div>
                </div>
     
     )

    }

}