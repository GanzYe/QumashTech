import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import AppHeader from '../app-header'
import Block from '../block'
import ButtonBack from '../button-back'

import './app.css'

export default class BlockApp extends Component {
    render() {
        return (
        <div className="block_page">
            <ButtonBack/>
            <AppHeader/>
            <Block/>
        </div>)}
}