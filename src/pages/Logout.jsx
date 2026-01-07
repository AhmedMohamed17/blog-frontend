import React ,{useContext ,useEffect ,useLayoutEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/usercontext';

const Logout = () => {
  const {setCurrentUser}= useContext(UserContext);
 const navigate = useNavigate();

 
 useEffect(()=>{
  setCurrentUser(null);
 navigate('/login');

 })
  return(
    <>
    </>
  )

}

export default Logout;