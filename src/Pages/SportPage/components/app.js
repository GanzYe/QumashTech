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
    let mas= document.querySelectorAll('.Sshet');
    
    mas.forEach(element => {
      console.log(element);
      element.disabled = true;
    });
    document.querySelector('.playersbtn').disabled = true;
    }
    else{
      console.log(id)
    let mas= document.querySelectorAll('.Sshet');
    mas.forEach(element => {
      element.disabled = false;
    });
    document.querySelector('.playersbtn').disabled = false;
    }}
render(){

    
    return (
      
      <div className='Sportera d-flex flex-column justify-content-center'>
          <img src={imgBack} class="BackImg" alt="..."/>
          <img src={img3} class="StrelkaR" alt="..."/>
          <img src={img4} class="StrelkaL" alt="..."/>
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
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" >
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>   
        
  </div>
<div className='CheckBoxx'>
<input class="magic-radio" type="radio" name="radio" id="1" value="option"onClick={()=> {this.Check(1)}}/>
<label for="1">
  Хватает игроков
</label>  
<input class="magic-radio" type="radio" name="radio" id="2" value="option" onClick={()=> {this.Check(2)}}/>
<label for="2">
  Нехватает игроков
</label> 
</div>
 <div className='Comman' aria-disabled='true'>
   <div className='contp'>
     <p className='players'>Количество игроков</p>
     <input className='Sshet'/>
   </div>
   <div className='contp'>
     <p className='players'>Количество нужных игроков</p>
     <input  className='Sshet' type={Number}/>
   </div>
   <button className='playersbtn'>Таблица команд</button>
  </div>
   <button className='btnBooking'>Забронировать</button>
    </div>


    )
    }
}
