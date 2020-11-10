import React, {Component} from 'react';
import buttonBackImg from './images/button-back.png'
import './button-back.css'

export default class ButtonBack extends Component {
    render() {
        return (
            <div className="button-back-container">
                <img className="button-back" src={buttonBackImg}></img>
            </div>
        )
    }
}