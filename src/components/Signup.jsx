import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
    //initiallize the hooks
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [tel,setTel]=useState('');
  return (
    <div className='row justified-content-center mt-4'>
        <div className="card col-md-6 shadow p-4">
             <h1>Signup</h1>
             <form>
               <input type="text" 
               placeholder='Enter your username' 
               className='form-control'
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required/> <br />

            
                {/* {username} */}
               <input type="email" 
               placeholder='Enter your email'
               className='form-control'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required/> <br />

               {/* {email} */}

               <input type="password"
               placeholder='Enter your password'
               className='form-control' 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required/> <br />

               {/* {password} */}


               <input type="tel"
               placeholder='Enter your phone number'
               className='form-control'
               value={tel}
               onChange={(e) => setTel(e.target.value)}
               required /> <br />

               {/* {tel} */}
               <input type="button" value='Signup' className='btn btn-primary' /> <br /> <br />
                Already had an account <Link to={"/signin"}>Sign in</Link>



            </form>     
        </div>
    </div>
  )
}

export default Signup;