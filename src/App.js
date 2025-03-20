import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import CoffeeTypes from './Components/coffeeTypes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee-types" element={<CoffeeTypes />} />
    </Routes>
  );
}

export default App;
