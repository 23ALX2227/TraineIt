import React from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log("Estoy funcionando");
        const newUser = null;
        newUser === true ? navigate("/user") : alert("No se pudo crear tu cuenta. Vuelva a intentarlo");
        
    }
  return (
    <div>Register
        <form>
            <label>Email: 
                <input type="email" 
                placeholder='Ingrese su Email' 
                required
                />
            </label>
            
            <label htmlFor="">Nombre: 
                <input type="texto" 
                placeholder='Ingrese su nombre' 
                required
                />
            </label>
            
            <label htmlFor="">Password: 
                <input type="password" 
                required 
                />
            </label>
            <button type="submit" onClick={ handleClick }>Submite</button>            

        </form>
    </div>
  )
}

export default Register