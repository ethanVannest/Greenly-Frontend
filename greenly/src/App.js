import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './PageRoutes/Home'
import Cart from './PageRoutes/Cart'
import ShowProduct from './PageRoutes/ShowProduct';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products/:id' component={ShowProduct}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </div>
  );
}

export default App;
