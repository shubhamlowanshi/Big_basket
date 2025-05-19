import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Root/Nabar';
import Home from './Root/Home';
import Products from './Root/Products';
import ProductTable from './Components/ProducTable';
import ProductForm from './Components/Create_Product';
import UpdateProductForm from './Components/Update_product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jason from './Components/json';
import './App.css';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/createnew" element={<ProductForm />} />
        <Route path="/productlist" element={<ProductTable/>} />
        <Route path="/admin" element={<UpdateProductForm />} />
        <Route path="/update/:id" element={<UpdateProductForm />} />


      </Routes>
    </Router>
    // <Jason/>
  );
}

export default App;
