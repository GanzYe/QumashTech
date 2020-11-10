import React, {Component} from 'react';

import './info-block.css'

export default class InfoBlock extends Component {
    render() {
        const {info} = this.props;
        console.log(info);
        return (
        <div></div>
        )
    }
}