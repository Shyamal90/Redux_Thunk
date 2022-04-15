import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(products)

  return (
    <div className='allProducts_container'>
      {
        products.map((product) => {
          return (
            <>
              <Link to={`/product/${product.id}`}>
              <div className="four wide column">
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="content">
                      <div className="header">{product.title}</div>
                      <div className="meta price">${product.price}</div>
                       <div className="meta">{product.category}</div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </>
          )
        })
      }


    </div>
  )
}

export default ProductComponent
