import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import './app-header.css'

export default class AppHeader extends Component {
    render() {
        const {blockName}=this.props;
        return (
            <div className="block-page-header">
                <div className="block_page_header_container">
                    <p>BI CITY SEOUL Block {blockName}</p>
                </div>
            </div>
        )
    }
}