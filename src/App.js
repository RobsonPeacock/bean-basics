import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import CoffeeTypes from './Components/coffeeTypes';
import CoffeeOrigins from './Components/coffeeOrigins';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee-types" element={<CoffeeTypes />} />
      <Route path="/coffee-origins" element={<CoffeeOrigins />} />
    </Routes>
  );
}

export default App;
