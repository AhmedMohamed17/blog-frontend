import React,{useState ,useContext} from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../Context/usercontext';

const Login = () => {
  const [userData ,setUserData] = React.useState({
    email:"",
    password:"",
  });

  const [error ,setError] = useState("");
  const navigate = useNavigate();
  const {setCurrentUser} = useContext(UserContext);


  const changeInputHandler=(e)=>{
    setUserData(prevState=>{
      return {...prevState , [e.target.name]:e.target.value}
    })

  }

  const loginUser = async(e)=>{
    e.preventDefault();
   setError("");
    try {
      console.log("login BASE URL:", process.env.REACT_APP_BASE_URL);

    const response =await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
    console.log("response",response);
    const user =await response.data;
    setCurrentUser(user);
    navigate('/');
    }
    catch (err) {
      setError(err.response.data.message);
    }
  }
  return (
    <section className='login'>
      <div className='container'>
        <h2>Sign In</h2>
        <form className='form login__form' onSubmit={loginUser}>
          {error && <p className='form__error-message'>{error}</p>}
          <input type='email' placeholder='Email' name="email" onChange={changeInputHandler} value={userData.email} autoFocus/> 
          <input type='password' placeholder='Password' name="password" onChange={changeInputHandler} value={userData.password}/>
          <button type='submit' className='btn primary'>Login</button>
       
        </form>
        <small>
           Don't have an account? <Link to='/register'>Sign up</Link>
        </small>
      </div>

    </section>
  )
}

export default Login