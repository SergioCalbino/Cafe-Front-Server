
import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState()
    const token = localStorage.getItem('token')

    const getProducts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/productos`)
        setProducts(data)
    }
    useEffect(() => {
        getProducts()

      
    }, [])
    

  return (
    <div className='flex flex-wrap m-0 '>
  {products && products.productos.map(product => (
    <div className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 '>
            <Product 
                {...product}
            />
        </div>

    ))

    }
    </div>
  )
}

export default Products