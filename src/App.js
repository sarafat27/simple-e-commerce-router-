import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './Components/GrandPa/GrandPa';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import OrderReview from './Components/OrderReview/OrderReview';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<RequireAuth>
          <OrderReview></OrderReview>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes>

    </div>
  );
}

export default App;
