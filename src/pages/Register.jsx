import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [userData ,setUserData] = React.useState({
    name:"",
    email:"",
    password:"",
    password2:""
  });
  const [error ,setError] = useState("");
  const navigate = useNavigate();

  const changeInputHandler=(e)=>{
    setUserData(prevState=>{
      return {...prevState , [e.target.name]:e.target.value}
    })
  }

  const registerUser = async(e)=>{
    e.preventDefault();
   setError("");
    try { 

    const response =await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData);
    
    const newUser =await response.data;
    console.log("new user",newUser);
    if(!newUser) {
      setError("Registration failed. Please try again.");
    }
    navigate('/login');
    }catch (err) {
     
      setError(err.response.data.message);
    }
      

  }


  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign UP</h2>
        <form className='form register__form' onSubmit={registerUser}>
          {error && <p className='form__error-message'>{error}</p>}
          <input type='text' placeholder='Full Name' name="name" onChange={changeInputHandler} value={userData.name} autoFocus/>
          <input type='email' placeholder='Email' name="email" onChange={changeInputHandler} value={userData.email}/> 
          <input type='password' placeholder='Password' name="password" onChange={changeInputHandler} value={userData.password}/>
          <input type='password' placeholder='Confirm Password' name="password2" onChange={changeInputHandler} value={userData.password2}/>
          <button type='submit' className='btn primary'>Register</button>
       
        </form>
        <small>
          Already have an account? <Link to='/login'>sign in</Link>
        </small>
      </div>

    </section>
  )
}

export default Register