import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Register from "./paginas/Register";
import ForgetPassword from "./paginas/ForgetPassword";
import Products from "./products/Products";
import Navbar from "./paginas/Navbar";
import NavBar from "./paginas/Navbar";
import CreateProduct from "./products/CreateProduct";



function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
      
              <Route path="/" element={<AuthLayout/>} >
              <Route index element={<Login/>} />
              <Route path="register" element={<Register/>} />
              <Route path="forget-password" element={<ForgetPassword/>} />
              </Route>
              <Route path="/products" element={<Products/>} />
              <Route path="/create-product" element={<CreateProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
