import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
	const navigate = useNavigate()

	const [correo, setCorreo] = useState()
	const [password, setPassword] = useState()

	const login = async() => {

		const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {correo, password})
			console.log(data)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		login()

	}

  return (
    <>
        <div>
          <h1  className="text-zinc-800 font-bold text-2xl mt-12 gap-10 p-5" >
            Inicia Sesion y <span className="text-red-600" >Administra tus productos</span>
          </h1>
        </div>
        
        <div>
			<form onSubmit={handleSubmit} >
				<div className="my-5" >
					<label 
						className="uppercase text-gray-600 block text-xl font-bold"
					 >
						Email
						<input
							className="border w-full p-3 mt-3 bg-slate-200 rounded-xl "
							type="email"
							placeholder="Email de registro"
							value={correo}
							onChange={e => setCorreo(e.target.value)}
						/>
					</label>
				</div>
				<div className="my-5" >
					<label 
						className="uppercase text-gray-600 block text-xl font-bold"
					 >
						Password
						<input
							className="border w-full p-3 mt-3 bg-slate-200 rounded "
							type="password"
							placeholder="Ingresa tu password"
							value={password}
							onChange={e => setPassword(e.target.value)}

						/>
					</label>
				</div>

				<input
					type="submit"
					value="Inicia Sesion"
					className="bg-sky-800 hover:bg-sky-900 text-white py-3 px-10 w-full cursor-pointer rounded-xl uppercase mt-5 md:w-auto "
				/>
			</form>
        </div>
    </>
  )
}

export default Login