import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import PageNotFound from "./pages/PageNotFound"
import Profile from "./pages/Profile"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<PageNotFound />} />


      </Routes>



    </BrowserRouter>
  )
}

export default App
