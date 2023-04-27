import React, { useContext } from 'react'
import '../CSS_files/Product.css'
import { allContext } from '../Components/ContextProvider';

const Product = () => {
  const{product,cart,cartCount,setCartCount}=useContext(allContext)

  const addProduct=(ele)=>{
    cart.push(ele)
    // console.log(cart);
    setCartCount(cartCount+1)
  }

  return (
    <>
    <div className='product'>
      {product.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      product.map((ele)=>{
        return<div key={ele.id} className="card">
          <img src={ele.image} alt="product image" />
          <h2>{ele.category}</h2>
          <p>{ele.price} $</p>
          <span>Free delivery</span>
          <button onClick={()=>{
            addProduct(ele)
          }}><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
        </div>
        
      })
    }
    
    </div>
    </>
  )
}

export default Product
