import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Project from './pages/Project';
import { useContext } from 'react';
import { isAuthProjectContext } from './context/ContextShare';
function App() {

const {isAuthToken,setIsAuthToken}= useContext(isAuthProjectContext)
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/dashboard' element={isAuthToken? <Dashboard dashboard/>:<Home/>} />
        <Route path='/project' element={<Project/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
