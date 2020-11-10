import React,{Component} from 'react';
import './app.css';
export default class BookingApp extends Component {
    Back(){
        history.back();
    }
    render(){      
    return (
        <div className="bookingPage" >
           
           <img src={img} onClick={Back} className='Back' alt='Back'/>
            <h1 className='Headdd'>Бронирование</h1>
                <input disabled={false} className=' InputC form-control'    placeholder="Имя *"/>
            
                <input className=' InputC form-control' disabled={false} placeholder="Фамилия *"/>
            
            
                <input className=' InputC form-control' disabled={false}placeholder="Электронная почта *"/>
            
            
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
          <a href=''> <button className='btnBooking'  >Забронировать</button></a>
        </div>
    );
    }
}
