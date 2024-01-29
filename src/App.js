
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/Home1';
import RestView from './pages/RestView';

function App() {
  return (
    <div className="App">
   
    <Header/>
    <Routes>

      <Route path='/' element={<Home1/>}/>
      <Route path='/restaurent-view/:id' element={<RestView/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
