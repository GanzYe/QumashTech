import React, {Component} from 'react';
import buttonBackImg from '../block/images/button-back.png'
import './button-back.css'

export default class ButtonBack extends Component {
    backHistory(){
        history.back();
    }
    render() {
        return (
            <div className="button-back-container">
                <img className="button-back" src={buttonBackImg} onClick={this.backHistory}></img>
            </div>
        )
    }
}