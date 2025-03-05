import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import './index.css';
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from './Store/Store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>  
    </Provider>
  )
}

export default App
