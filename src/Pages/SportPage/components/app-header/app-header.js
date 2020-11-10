import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import './app-header.css'

export default class AppHeader extends Component {
    render() {
        return (
            <div className="block-page-header">
                <div className="block_page_header_container" style={{textAlign: 'center'}} >
                    <p className="block_page_text" style={{fontSize: '14px', paddingLeft: '5px'}}>Бронирование спорт. площадок</p>
                </div>
            </div>
        )
    }
}