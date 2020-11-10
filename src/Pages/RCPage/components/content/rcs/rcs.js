import React, { Component } from 'react';
import App from '../../../../BlockPage/components/app'
import {Link} from 'react-router-dom'
// import './rcs.css';

export default class RCS extends Component {

    render() {
        const {height} = this.props;
        const {width} = this.props;
        const {clipPath} = this.props;
        const {paddingSize} = this.props;
        const {blockName} = this.props;
        const navStyle = {
            color:'white'
        };
        console.log(height);
        return (
                <div className="res_block" onClick={
                    ()=>{
                        console.log("HZ");
                    }
                } style={{
                    display: "block",
                    width: width,
                    height: height,
                    padding: paddingSize,
                    "backgroundColor": "white",
                    "boxShadow":  "5px 5px 10px #a3a3a3, -5px -5px 10px linear-gradient(90deg, rgba(0,83,147,1)     0%, rgba(0,113,185,1) 100%)",
                    "clipPath":clipPath
                }}>
                    <i>{blockName}</i>
                </div>
            
        );
    }
}
