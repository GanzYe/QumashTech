import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import AppHeader from '../app-header'
import Block from '../block'
import ButtonBack from '../button-back'
import ReactRouter from 'react-router-dom';
import './app.css'

export default class BlockApp extends Component {
    render() {
        const{blockName}=this.props.location.state;
        console.log(blockName);
        return (
        <div className="block_page">
            <ButtonBack/>
            <AppHeader blockName={blockName}/>
            <Block blockName={blockName}/>
        </div>)}
}