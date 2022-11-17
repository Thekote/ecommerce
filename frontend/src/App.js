import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddProduct from "./pages/AddProduct"
import AddCategory from "./pages/AddCategory"
import { Slide, ToastContainer } from "react-toastify"
import HomePage from "./pages/Home"
import GlobalStyle from "./styles/global"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "react-toastify/dist/ReactToastify.css"

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="product/new" element={<AddProduct />} />
      <Route path="category/new" element={<AddCategory />} />
    </Routes>
    <Footer />
    <GlobalStyle />

    <ToastContainer
      theme="colored"
      position="top-center"
      autoClose={5000}
      transition={Slide}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
    />
  </BrowserRouter>
)

export default App
