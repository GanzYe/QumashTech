import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import AppHeader from '../app-header'
import CoworkingBlock from '../coworking-block'
import ButtonBack from '../button-back'

import './app.css'

export default class App extends Component {
    render() {
        return (
        <div className="coworking_page">
            <ButtonBack/>
            <AppHeader/>
            <CoworkingBlock/>
        </div>)}
}