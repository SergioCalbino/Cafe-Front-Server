import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CreateProduct = () => {
    
    const token = localStorage.getItem('token')


    const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-token': token, // Aquí se pasa el token en los encabezados
        },
      };

    const objProduct = {
        nombre: '',
        estado: true,
        usuario: '',
        precio: '',
        categoria: '',
        descripcion: '',
        disponible: true,
        img: '#'
    
      }
    
      const [reg, setReg] = useState(objProduct);
      const [alerta, setAlerta] = useState({})
      const [categories, setCategories] = useState([])
      

      //Me traigo las categorias
      const getCategories = async () =>{

          const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/categorias`)
          setCategories(data.categorias)
          console.log(categories)
          console.log(data.categorias)
      }

      useEffect(  () => {
        getCategories()
        
      }, [])
      

      
      const createProducto = async () => {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/productos`, reg, config)
        console.log(data)
      }
    

    //   const handleCategorie = () => {
    //       const categoriId = e.target.value
    //       categoria: categoriId

    //   }

      const handleChange = (e) => {
        setReg({...reg,
          [e.target.name] : e.target.value,
        })
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // const { nombre, correo, password, repPassword } = reg
    
        // if ([nombre,correo, password, repPassword].includes('')) {
        //   setAlerta({msg: 'Hay campos vacios', error: true})
        //   return
        // };
        
        // if (password.length < 6) {
        //   setAlerta({msg: 'La contraseña debe tener mas de 6 caracteres', error: true})
        //   return
        // }
    
        // if (password !== repPassword ) {
        //   setAlerta({msg: 'Los password no son iguales', error: true})
        //   return
          
        // }
    
        createProducto()
        setReg('')
    
    
      }
      
      const { msg } = alerta
      return (
        <>
          <div>
            <h1 className="text-zinc-800 font-bold text-2xl mt-12 gap-10 p-5">
              Crear <span className="text-red-600">Productos</span>
            </h1>
        </div>
          
          
    
         { msg && <Alerta
            alerta={alerta}
          />}
            <div  className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
              <form onSubmit={handleSubmit} className="mr-8 md:ml-8">
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nombre
                  <input
                    className="border w-full p-3 mt-3 bg-slate-200 rounded-xl "
                    type="text"
                    placeholder="Nombre del producto"
                    name="nombre"
                     value={reg.nombre}
                    onChange={handleChange}
                  />
                </label>
              </div>

        
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                precio
                  <input
                    className="border w-full p-3 mt-3 bg-slate-200 rounded-xl "
                    type="number"
                    placeholder="Precio"
                    name="precio"
                    value={reg.precio}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                Usuario
                  <input
                    className="border w-full p-3 mt-3 bg-slate-200 rounded-xl "
                    type="text"
                    placeholder="Usuario"
                    name="usuario"
                    // value={categories[0].usuario._id}
                    onChange={handleChange}
                  />
                </label>
              </div>
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                descripcion
                  <textarea
                    className="border w-full p-3 mt-3 bg-slate-200 rounded-xl "
                    type="text"
                    placeholder="Descripcion del producto"
                    name="descripcion"
                    value={reg.descripcion}
                    onChange={handleChange}
                  />
                </label>
            
              </div>
              
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Elegir Categoria
                   <select id="select-example" name='categoria' value={reg.categoria} onChange={handleChange}>
                        <option value="">-- Selecciona una opción --</option>
                        { categories && categories.map( categorie => (
                                <option key={categorie._id} value={categorie._id} > {categorie.nombre} </option>
                            ))}
                        
                    </select>
                </label>
            
              </div>
    
    
              <input
                type="submit"
                value="Crear Producto"
                className="bg-sky-800 hover:bg-sky-900 text-white py-3 px-10 w-full cursor-pointer rounded-xl uppercase mt-5 md:w-auto "
              />
            </form>
            </div>
            </>
      )
}

export default CreateProduct