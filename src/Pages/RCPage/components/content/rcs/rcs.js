import React, { Component } from 'react';

// import './rcs.css';

export default class RCS extends Component {

    render() {
        const {height} = this.props;
        const {clipPath} = this.props;
        console.log(height);
        return (
            <div className="res_block" style={{
                display: "block",
                width: "90%",
                height: height,
                "background-color": "#E7E7E8",
                "box-shadow":  "5px 5px 10px #a3a3a3, -5px -5px 10px linear-gradient(90deg, rgba(0,83,147,1) 0%, rgba(0,113,185,1) 100%)",
                "clip-path":clipPath
            }}></div>
            
        );
    }
}
