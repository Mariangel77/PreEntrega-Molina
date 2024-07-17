
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"


function App() {
  const [cartCount, setCartCount] = useState(5)

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount}/>

      <Routes>
        
        <Route path="/" element={<ItemListContainer greetings={"lista de productos"}/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App