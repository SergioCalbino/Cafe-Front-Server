
import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <>
    <div className='flex flex-wrap m-0 '>
  {products && products.productos.map(product => (
    <div className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 '>
            <Product 
                key={product.nombre}
                {...product}
            />
        </div>

    ))

    }
    </div>
    <div className=' m-10 lg:flex lg:justify-between' >
    <Link to='/create-product' className=' lg:flex lg:justify-between md:w-auto w-full cursor-pointer rounded-x bg-blue-500 hover:bg-blue-600 rounded-xl mt-10 p-3 uppercase text-white'> 
      Crear Producto 
    </Link>
    </div>
    </>
  )
}

export default Products