import React,{Component} from 'react';
import './app.css';
import img from './imgs/footbal.png'
import img2 from './imgs/basketbal.png'
import img3 from './imgs/R.png'
import img4 from './imgs/L.png'
import imgBack from './imgs/ArrL.png'
export default class App extends Component {

  Check(id) {
 
   if(id==1 ){
    console.log(id)
   document.querySelector('.Sshet').disabled = true;
    document.querySelector('.Sshet2').disabled = true;
      
    document.querySelector('.playersbtn').disabled = true;
    document.querySelector('.Comman').style.display='none';
    }
    else{
      console.log(id)
      document.querySelector('.Sshet').disabled = false;
      document.querySelector('.Sshet2').disabled = false;
    document.querySelector('.playersbtn').disabled = false;
    document.querySelector('.Comman').style.display='block';
    }}
render(){

    
    return (
      
      <div className='Sportera d-flex flex-column justify-content-center'>
          <img src={imgBack} class="BackImg" alt="..."/>
        <div>
        </div>
        <div className='SportText'>
          <label className='SportL'>
            <p className='SportP'>Спорт площадка</p>
          </label>
        </div>
      <div className='SportPage '>
     
      <div id="carouselExampleInterval" class="carousel slide" data-interval="false" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active Mid">
      <img src={img} class="d-block w-100" alt="..."/>
      <p className='PforImg'>Footbal</p>
    </div>
    <div class="carousel-item Mid" >
      <img src={img2} class="d-block w-100" alt="..."/>
      <p className='PforImg'>Basketbal</p>
    </div>
  </div>
  <div className='Arrows'>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>   </div>
        
  </div>
        <h1 className='question'>Хватает ли игроков?</h1>
  <div className='container'>
        <input type='radio' name='size' id='small' onClick={()=> {this.Check(1)}}/>
        <label className='RadioL' for='small' aria-checked='true' >Да</label><br></br>
        <input  type='radio' name='size'defaultChecked  id='large'/>
        <label className='RadioL' for='large'  onClick={()=> {this.Check(2)}}>Нет</label>
        
      </div>
 <div className='Comman' aria-disabled='true'>
   <div className='contp'>
     <p className='players'>Количество игроков</p>
     <input className='Sshet'/>
   </div>
   <div className='contp'>
     <p className='players'>Количество нужных игроков</p>
     <input  className='Sshet2' type={Number}/>
   </div>
   <button className='playersbtn'>Таблица команд</button>
  </div>
   <button className='btnBooking'>Забронировать</button>
    </div>


    )
    }
}
