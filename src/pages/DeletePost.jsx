import React ,{useEffect ,useContext ,useState} from 'react'
import { Link ,useNavigate ,useLocation} from 'react-router-dom';
import {UserContext} from '../Context/usercontext'
import axios from 'axios';
import Loader from '../components/loader';

const DeletePost = ({postId:id}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const [loading,setIsLoading] =useState(false)
    const {currentUser} =useContext(UserContext);
    const token = currentUser?.token;

    useEffect(()=>{
      if(!token){
        navigate('/login')
      }
    },[])
    


    const removePost =async()=>{
      setIsLoading(true)
      try{
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`,
          {withCredentials:true ,headers:{Authorization:`Bearer ${token}`}})

        if(response.status ==200){
           if(location.pathname == `/myposts/${currentUser.id}`){
          navigate(0)
           }else {
          navigate('/')
        }
           
        }
              setIsLoading(false)

      }
      
      catch(err){
        console.log("could't delete post");
        
      }
    }
  if(loading){
    return <Loader />
  }

  
  return (
   <Link className='btn sm danger' onClick={()=>removePost(id)}>Delete</Link>
  )
}

export default DeletePost