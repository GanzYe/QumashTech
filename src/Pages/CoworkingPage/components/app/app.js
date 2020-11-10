import React, {Component} from 'react';
/* import ReactDOM from 'react-dom'; */

import AppHeader from '../app-header'
import CoworkingBlock from '../coworking-block'
import ButtonBack from '../button-back'

import './app.css'

export default class App extends Component {
    maxid= 1;
    state={
        officesData:[
           this.createOffice('green','-82%','8%','Офис'),
           this.createOffice('red','-82%','8%','Офис'),
           this.createOffice('red','-102%','17%','Офис'),
           this.createOffice('green','-102%','17%','Офис'),
           this.createOffice('green','-122%','25%','Офис'),
           this.createOffice('green','-122%','25%','Офис'),
           this.createOffice('green','-142%','36%','Офис'),
           this.createOffice('red','-142%','36%','Офис'),
        ]
    }
   createOffice(color,top,left,typeName){
    return{
        color,
        top,
        left,
        show:false,
        id: this.maxid++,
        type:this.generateTypeOffice(typeName),
    }
    } 
    generateTypeOffice(typeName){
        switch(typeName){
            case'Офис':
            return{
                typeName,
                area:56,
                office_num:this.maxid,
                max_people_amount:5
            };
            case'Переговорная':
            return{
                typeName,
                area:86,
                office_num:this.maxid,
                max_people_amount:10
            };
            case'Зал':
            return{
                typeName,
                area:146,
                office_num:this.maxid,
                max_people_amount:20
            };
            default:return{
                typeName,
                area:0,
                office_num:this.maxid,
                max_people_amount:0
            }            
        }
    }
    showInfo=(id)=>{   
        this.setState(({officesData})=>{
        officesData.every((el)=>{
                if(el.id!==id){
                    el.show=false;
                }
                else{
                    el.show=true;
                }
                return true;
                
            })            
            return{
                officesData,
            }
        })   
       
    }
    render() {
        const {officesData} = this.state;
    //    console.log(officesData);
        return (
        <div className="coworking_page">
            <ButtonBack/>
            <AppHeader/>
            <CoworkingBlock officesData={officesData}
            onClickHandle={this.showInfo}            
            />
        </div>)}
}