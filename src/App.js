import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import MasterLayout from './Components/Layout/MasterLayout';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Product from './Components/Pages/Product/Product';
import New from './Components/Pages/New/New';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MasterLayout children={<Home/>}/>}/>
        <Route path='/product' element={<MasterLayout children={<Product/>}/>}/>
        <Route path='/new' element={<MasterLayout children={<New/>}/>}/>
        <Route path='/about' element={<MasterLayout children={<About/>}/>}/>
        <Route path='/contact' element={<MasterLayout children={<Contact/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;