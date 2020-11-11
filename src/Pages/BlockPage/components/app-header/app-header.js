import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import './app-header.css'

export default class AppHeader extends Component {
    render() {
        const {blockName}=this.props;
        return (
            <div className="rc-header">
                <div className="rc-header-block">
                    <p className="rc-header-block-text">BI CITY SEOUL Block {blockName}</p>
                </div>
            </div>
        )
    }
}