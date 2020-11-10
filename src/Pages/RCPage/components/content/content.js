import React, { Component } from 'react';
import RCS from './rcs';
import {Link} from 'react-router-dom';

import './content.css';
export default class Content extends Component {

    render() {
        return (
            
            <div className="content_container">
                    <div className="block_container">
                        <div className="block_rc_container">
                            <RCS height={180} width="45%" clipPath ="polygon(18% 0, 43% 6%, 38% 19%, 26% 16%, 12% 64%, 22% 85%, 76% 72%, 79% 84%, 11% 100%, 0 63%)" paddingSize="50px 20px 0px 15px" blockName="E"/>
                            <Link to={{pathname: '/block',state: {
                                    blockName:"F",
                                }}}>
                                <RCS height={120} width="15%" clipPath="polygon(25% 0%, 75% 0%, 45% 40%, 75%      100%, 25% 100%, 0 40%)" paddingSize="40px 30px 0px 5px" blockName="F"/>
                            </Link>
                            <RCS height={120} width="15%" clipPath="polygon(25% 0%, 75% 0%, 41% 45%, 75% 100%, 25% 100%, 0 50%)" paddingSize="40px 20px 0px 5px" blockName="G"/>
                            <RCS height={110} width="25%" clipPath="polygon(25% 0%, 49% 0, 34% 50%, 52% 100%, 25% 100%, 9%     51%)" paddingSize="40px 20px 0px 10px" blockName="H"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)" paddingSize="50px 15px 0px 20px" blockName="A"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)" paddingSize="50px 15px 0px 20px" blockName="B"/>
                            <RCS height={120} width="17%" clipPath="polygon(12% 10%, 60% 0, 83% 90%, 33% 100%)" paddingSize="50px 15px 0px 20px" blockName="C"/>
                            <RCS height={170} width="40%" clipPath="polygon(0% 15%, 20% 10%, 30% 76%, 66% 78%, 83% 15%, 72%     13%, 76% 1%, 100% 6%, 80% 100%, 21% 95%, 7% 80%)"paddingSize="80px 10px 0px 15px" blockName="D"/>
                            
                        </div>
                    </div>
            </div>
        );

    }
}
