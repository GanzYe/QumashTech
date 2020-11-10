import ReactDOM from 'react-dom';
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

