import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greetings}) => {

  const [products, setProducts] = useState ([])

  useEffect(()=>{
    getProducts()
    .then((res)=>{
      setProducts(res)
    })
     
    .catch((err)=> console.log(err))

  }, [])

  return (
    <div>
      <h1>{greetings}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer