import React,{Component ,useEffect, useState } from 'react';
import './app.css';
import img from './imgs/footbal.png'
import img2 from './imgs/basketbal.png'
import img3 from './imgs/R.png'
import img4 from './imgs/L.png'
import imgBack from './imgs/ArrL.png'
import FindPage from './modal/modal'

import ButtonBack from './button-back'
import AppHeader from './app-header'


const App=()=> {

  function Check(id) {
 
   if(id==1 ){
    console.log(id)
  
    document.querySelector('.Sshet2').disabled = true;
      
    document.querySelector('.playersbtn').disabled = true;
    document.querySelector('.Comman').style.display='none';
    }
    else{
      console.log(id)
      document.querySelector('.Sshet2').disabled = false;
      document.querySelector('.playersbtn').disabled = false;
      document.querySelector('.Comman').style.display='block';
    }}


   const [modalActive, setModalActive]= useState(false);
    return ( 

      <div className='Sportera d-flex flex-column justify-content-center'>
        <div className='teem d-flex flex-row justify-content-around '>
              <p>Олег Иванов</p>
              <p>6/20</p>
          </div>
          <div className='teem d-flex flex-row justify-content-around '>
              <p>Антон Шастун</p>
              <p>1/20</p>
          </div>
          <div className='teem d-flex flex-row justify-content-around '>
              <p>Саша Ангел</p>
              <p>8/10</p>
          </div>
          <div className='teem d-flex flex-row justify-content-around '>
              <p>Олег Иванов</p>
              <p>7/10</p>
          </div>
          <div className='teem d-flex flex-row justify-content-around '>
              <p>Борис Петух</p>
              <p>10/20</p>
          </div>
          <div className='teem d-flex flex-row justify-content-around '>
              <p>Олег Иванов</p>
              <p>5/10</p>
          </div>
                  <ButtonBack/>
            <AppHeader/>    
      <div className='SportPage '>
     
      <div id="carouselExampleInterval" class="carousel slide" data-interval="false" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active Mid">
      <img src={img} class="d-block w-100" alt="..."/>
      <p className='PforImg'>Football</p>
    </div>
    <div class="carousel-item Mid" >
      <img src={img2} class="d-block w-100" alt="..."/>
      <p className='PforImg'>Basketball</p>
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
        <h1 className='question'>Вы ищите себе соперников?</h1>
  <div className='container'>
        <input type='radio' name='size' id='small' onClick={()=> {Check(2)}}/>
        <label className='RadioL' for='small' aria-checked='true' >Да</label>
        <input  type='radio' name='size'defaultChecked  id='large'/>
        <label className='RadioL' for='large'  onClick={()=> {Check(1)}}>Нет</label>
        
      </div>
 <div className='Comman' aria-disabled='true'>

   <div className='contp'>
     <p className='players'>Количество нужных игроков</p>
     <input  className='Sshet2'  type={Number}/>
   </div>
   <button className='playersbtn'>Список команд</button>
  </div>
   <button className='btnBooking'>Забронировать</button>
    </div>


    )
    
}
export default App;
