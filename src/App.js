import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}  ></Route>
        <Route path='/home' element={<Home />}  ></Route>
        <Route path='/login' element={<Login />}  ></Route>
        <Route path='/register' element={<Register />}  ></Route>
        <Route path='/about' element={<About />}  ></Route>
        <Route path='/blogs' element={<Blogs />}  ></Route>
        <Route path='*' element={<NotFound />}  ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
