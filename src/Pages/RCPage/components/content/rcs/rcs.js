import React, { Component } from 'react';

// import './rcs.css';

export default class RCS extends Component {

    render() {
        const {height} = this.props;
        const {width} = this.props;
        const {clipPath} = this.props;
        console.log(height);
        return (
            <div className="res_block" onClick={
                ()=>{
                    
                }
            } style={{
                display: "block",
                width: width,
                height: height,
                "backgroundColor": "white",
                "boxShadow":  "5px 5px 10px #a3a3a3, -5px -5px 10px linear-gradient(90deg, rgba(0,83,147,1) 0%, rgba(0,113,185,1) 100%)",
                "clipPath":clipPath
            }}></div>
            
        );
    }
}
