import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './Pages/MainPage/components/app';
import RcPage from './Pages/RCPage/components/app';
import BlockApp from './Pages/BlockPage/components/app';
import BookingApp from './Pages/BookingPage/components/app';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//David 2
function AppMain(){
    return(
        <Router>
            <Switch>
               <Route path='/' exact component={App}/>
               <Route path='/rc' component={RcPage}/>
               <Route path='/block' component={BlockApp} />
               <Route path='/booking' component={BookingApp}/>
            </Switch>
        </Router>
    )
}
ReactDOM.render(<AppMain/>,document.getElementById('root'));
=======
<<<<<<< HEAD
import App from './Pages/CoworkingPage/components/app';
/* import App from './Pages/BookingPage/components/app'; */
/* import App from './Pages/SportPage/components'; */
=======
import App from './Pages/BookingPage/components/app';
>>>>>>> 1319d78d64b4bb0cde05bb3b6ea0b38f9bfbf0e7


ReactDOM.render(<App/>,document.getElementById('root'));    
>>>>>>> 9c14bc9371491194bb291b0ae4bf877bf3937ee7
