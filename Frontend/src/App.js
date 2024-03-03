import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AddBook from './Components/AddBook';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrolltoTop';

function App() {
  return (
    <div className='relative'>
     <BrowserRouter>
     <ScrollToTop/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/addbook' element={<AddBook/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
 