import React, { Component } from 'react';
import RCS from './rcs';
import {Link} from 'react-router-dom';

import './content.css';
export default class Content extends Component {

    render() {
        return (
            <Link to="/block">
            <div className="content_container">
                    <div className="block_container">
                        <div className="block_rc_container">
                            <RCS height={180} width="45%" clipPath ="polygon(18% 0, 43% 6%, 38% 19%, 26% 16%, 12% 64%, 22% 85%, 76% 72%, 79% 84%, 11% 100%, 0 63%)"/>
                            <RCS height={120} width="15%" clipPath="polygon(25% 0%, 75% 0%, 45% 40%, 75% 100%, 25% 100%, 0 40%)"/>
                            <RCS height={120} width="15%" clipPath="polygon(25% 0%, 75% 0%, 41% 45%, 75% 100%, 25% 100%, 0 50%)"/>
                            <RCS height={110} width="25%" clipPath="polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9%     51%)"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)"/>
                            <RCS height={170} width="40%" clipPath="polygon(0% 15%, 20% 10%, 30% 76%, 66% 78%, 83% 15%, 72%     13%, 76% 1%, 100% 6%, 80% 100%, 21% 95%, 7% 80%)"/>
                        </div>
                    </div>
            </div>
            </Link>
        );

    }
}
