import React,{Component} from 'react';
import './app.css';
export default class App extends Component {
    render(){
      
    return (
        <div className="bookingPage" >
            <h1>Бронирование</h1>
                <input type={Text} disabled={false}     placeholder="Имя *"/>
            
                <input type={Text} disabled={false}placeholder="Фамилия *"/>
            
            
                <input type={Text} disabled={false}placeholder="Электронная почта *"/>
            
            
                <input disabled={false} type={Text}placeholder="Номер телефона *"/>
            
            <div className='Twoin1'>
          <input type={Text} disabled={false} placeholder="Дата *"className='miniP'/>
          <input type={Text} disabled={false}placeholder="Время *" className='miniP'/> 
            
           </div>
         <label className='ll'>

         </label>
           <div className='Pred'>
               <p>ПредОплата *</p>
               <div className='Pay'>
                  <button className='MiniSecond'>Налом</button>
                  <button className='MiniSecond'>Онлайн</button>
               </div>
           </div>
           <button className='btnBooking'  >Забронировать</button>
        </div>
    );
    }
}
