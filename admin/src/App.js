import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import Admin from './pages/Admin';
import AddAdmin from './pages/AddAdmin';
import EditAdmin from './pages/EditAdmin';
import AddCategory from './pages/AddCategory';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addadmin" element={<AddAdmin />} />
        <Route path="/admin/:id" element={<EditAdmin />} />
        <Route path="/addcategory" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
