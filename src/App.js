import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Componets/Homepage';
import ProductView from './Componets/ProductView';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/view/:id' element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
