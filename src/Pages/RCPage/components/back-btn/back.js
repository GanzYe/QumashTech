import React, { Component } from 'react';
import buttonBackImg from '../images/button.png'
import './back.css';

export default class BackBtn extends Component {

    render() {
        return (
            <div className="button-back-container">
                <img src={buttonBackImg}></img>
            </div>
        );

    }
}
