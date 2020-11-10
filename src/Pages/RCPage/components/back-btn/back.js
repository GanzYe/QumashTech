import React, { Component } from 'react';
import buttonBackImg from '../images/button.png'
import './back.css';
import {BrowserRouter, Link} from 'react-router-dom';
export default class BackBtn extends Component {
    backHistory(){
        history.back();
    }
    render() {
        return (
            <div className="button-back-container" onClick={this.backHistory}>
                    <img src={buttonBackImg}></img>
            </div>
        );

    }
}
