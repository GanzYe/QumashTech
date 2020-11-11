import React,{Component} from 'react';
import img from './btn.png';
import {Link} from 'react-router-dom';
import './app.css';
export default class BookingApp extends Component {
    Back(){
        history.back();
    }
    render(){      
    return (
        <div className="bookingPage" >
           
            <div className="button-back-container">
                <img className="button-back" src={img} onClick={this.Back}></img>
            </div>
            <div className="rc-header">
                <div className="rc-header-block">
                    <p className="rc-header-block-text">Бронирование</p>
                </div>
            </div>
                <input disabled={false} className=' InputC form-control nameBlock'    placeholder="Имя *"/>
            
                <input className=' InputC form-control' disabled={false} placeholder="Фамилия *"/>
            
            
                <input className=' InputC form-control' disabled={false} placeholder="Электронная почта *"/>
            
            
                <input disabled={false} className=' InputC form-control'placeholder="Номер телефона *"/>
            
            <div className='Twoin1'>
          <input   placeholder="Дата *"className='form-control miniP'/>
          <input placeholder="Время *" className='form-control miniP'/> 
            
           </div>
         <label className='ll'>

         </label>
           <div className='Pred'>
               <p className='PredP'>Предoплата *</p>
               <div className='Pay'>
                <p className='Paym'>Наличные</p>
                <input type="checkbox" id="agree"/>
                <label class="check" for="agree"></label> 
                <p className='Paym'>Онлайн</p>
                </div>
           </div>
           <button className='btnBooking'>
            <Link to='/' className='linkName'>
              <div className='btnBookingChild'>
                    Забронировать
               </div>
            </Link>
        </button>
        </div>
    );
    }
}
