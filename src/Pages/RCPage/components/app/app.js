import React, { Component } from 'react';
import BackBtn from '../back-btn';
import Content from '../content';
import RcHeader from '../rc-header';

import './app.css';

export default class RcPage extends Component {

    render() {
        return (
            <div className="rc-page" >
                <BackBtn/>
                <RcHeader/>
                <Content/>
            </div >
        );

    }
}
