import React, {Component} from 'react';
import buttonBackImg from '../block/images/button-back.png'
import './button-back.css'

export default class ButtonBack extends Component {
    render() {
        return (
            <div className="button-back-container">
                <img src={buttonBackImg}></img>
            </div>
        )
    }
}