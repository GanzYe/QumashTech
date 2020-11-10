import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import AppHeader from '../app-header'
import CoworkingBlock from '../coworking-block'
import ButtonBack from '../button-back'

import './app.css'

export default class App extends Component {
    state={
        officesData:[
            {
            type: 'type',
            office_num: 1,
            area: '12x12',
            max_people_amount: '12',
            additional_opportunities: 'free wifi'}
        ]
    }
/*     createOffice(){

    } */
    render() {
        return (
        <div className="coworking_page">
            <ButtonBack/>
            <AppHeader/>
            <CoworkingBlock officesData={this.state.officesData}/>
        </div>)}
}