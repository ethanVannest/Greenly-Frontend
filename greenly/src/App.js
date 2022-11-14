import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './PageRoutes/Home'
import Cart from './PageRoutes/Cart'
import ShowProduct from './PageRoutes/ShowProduct';


import Nav from './components/Navbar'

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
        <div>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route exact path='/products/:id' element={ <ShowProduct/> }/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
