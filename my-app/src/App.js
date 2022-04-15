import './App.css';
import Header from './components/Header'
import {  Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
