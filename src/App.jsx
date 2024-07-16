
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter} from "react-router-dom"


function App() {
  const [cartCount, setCartCount] = useState(5)

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount}/>
    </BrowserRouter>
  )
}

export default App