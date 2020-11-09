import React,{Component} from 'react';
import './app.css';
import img from './footbal.png'
import img2 from './basketbal.png'
import img3 from './R.png'
import img4 from './L.png'
export default class App extends Component {
    render(){
        
    return (
      <div className='Sportera d-flex flex-column justify-content-center'>
        <div>
        </div>
        <div className='SportText'>
          <label className='SportL'>
            <p className='SportP'>Спорт площадка</p>
          </label>
        </div>
      <div className='SportPage '>
            <div id="carouselExampleControls era" class="carousel slide" data-ride="carousel">
              
        <div class="carousel-inner">
         
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..."/>
            <div className="shahzodLox">
            <h2>Football</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."/>
            <div className="shahzodLox">
            <h2>Basketball</h2>

            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"       data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button"       data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
  </div>
<div className='CheckBoxx'>
<input  type="checkbox" id="agree"/>
            <label class="remember" for="agree">Хватает ли игроков?</label>
</div>
<div className='Comman'>
  <div className='contp'>
    <p className='players'>Количество игроков</p>
    <input className='Sshet' type={Number}/>
  </div>
  <div className='contp'>
    <p className='players'>Количество нужных игроков</p>
    <input  className='Sshet' type={Number}/>
  </div>
  <button className='playersbtn'>Таблица команд</button>
  </div>
    </div>


    )
    }
}
