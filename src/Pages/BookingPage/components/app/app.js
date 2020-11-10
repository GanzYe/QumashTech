import React,{Component} from 'react';
import './app.css';
export default class App extends Component {
    render(){
      
    return (
        <div className="bookingPage container" >
            <h1>Бронирование</h1>
                <input disabled={false} className='form-control InputC'    placeholder="Имя *"/>
            
                <input className='form-control InputC' disabled={false}placeholder="Фамилия *"/>
            
            
                <input className='form-control InputC' disabled={false}placeholder="Электронная почта *"/>
            
            
                <input disabled={false} className='form-control InputC'placeholder="Номер телефона *"/>
            
            <div className='Twoin1'>
          <input   placeholder="Дата *"className='form-control miniP'/>
          <input placeholder="Время *" className='form-control miniP'/> 
            
           </div>
         <label className='ll'>

         </label>
           <div className='Pred'>
               <p>ПредОплата *</p>
               <div className='Pay'>
                  <button className='form-control MiniSecond'>Налом</button>
                  <button className='form-control MiniSecond'>Онлайн</button>
               </div>
           </div>
           <button className='btnBooking'  >Забронировать</button>
        </div>
    );
    }
}
