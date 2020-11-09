import React, { Component } from 'react';
import RCS from './rcs';

import './content.css';
export default class Content extends Component {

    render() {
        return (
            <div className="content_container">
                    <div className="block_container">
                        <RCS height={200} clipPath ="polygon(18% 0, 43% 6%, 38% 19%, 26% 16%, 12% 64%, 22% 85%, 76% 72%, 79% 84%, 11% 100%, 0 63%)"/>
                        <RCS height={200} clipPath="polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9% 51%)"/>
                        <RCS height={200} clipPath="polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9% 51%)"/>
                        <RCS height={170} clipPath="polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9% 51%)"/>
                    </div>
            </div>
        );

    }
}
