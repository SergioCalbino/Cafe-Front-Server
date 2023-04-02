import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import CreateUser from "./paginas/CreateUser";
import ForgetPassword from "./paginas/ForgetPassword";



function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>} >
              <Route index element={<Login/>} />
              <Route path="register" element={<CreateUser/>} />
              <Route path="forget-password" element={<ForgetPassword/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
