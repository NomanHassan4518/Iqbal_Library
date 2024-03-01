import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className='relative'>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
 