import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import './index.css';
import Navbar from "./Components/Navbar";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
