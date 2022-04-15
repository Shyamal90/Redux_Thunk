import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import {setProducts,fetchProducts} from '../redux/actions/productActions'

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch();



//   =========== Fetching Product ==================
  // const fetchProducts = async( ) => {
  //     await axios.get(`https://fakestoreapi.com/products`).then((resp)=>{
  //         dispatch(setProducts(resp.data));
  //     }).catch((error)=>{
  //         console.log(error)
  //     })
  // }

  useEffect(()=>{
      dispatch(fetchProducts())

  },[])

  
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
