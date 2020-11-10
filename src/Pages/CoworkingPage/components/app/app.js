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
           this.createOffice('red','-81%','8%','Офис'),
           this.createOffice('red','-102%','17%','Офис'),
           this.createOffice('green','-101%','17%','Офис'),
           this.createOffice('grey','-122%','26%','Офис'),
           this.createOffice('green','-121%','26%','Офис'),
           this.createOffice('green','-142%','36%','Офис'),
           this.createOffice('red','-141%','36%','Офис'),
           this.createOffice('green','-122%','5%','Переговорная','27%','14%'),
           this.createOffice('green','-190%','72.3%','Зал','30%','22.5%'),
        ]
    }
   createOffice(color,top,left,typeName,height ='10%',width='5%'){
    return{
        color,
        top,
        left,
        height,
        width,
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