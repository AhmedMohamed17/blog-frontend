import React , {useEffect ,useState,useContext}from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import Loader from '../components/loader'
import DeletePost from './DeletePost'
import { UserContext } from '../Context/usercontext'

const PostDetail = () => {
  const {id}=useParams();
  const [post ,setPost]= useState(null);
 
  const [error,setError] =useState(false);
  const [isLoading ,setIsLoading] = useState(false)
  const {currentUser} =useContext(UserContext);
   
  useEffect(()=>{
   const getPost =async()=>{
    setIsLoading(true);
    try{
      const response =await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
      setPost(response.data);
     
    }
    catch(err){
      setError(err)
    }
    setIsLoading(false)
   }
   getPost()
  },[id]) // i changed for netlify deploy

  if(isLoading){
    return <Loader/>
  }
  return (
   <section className='post-detail'>
    {error &&<p className='error'>{error}</p>}
   {post&& <div className='container post-detail__container'>
      <div className="post-detail__header">
        <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
        {currentUser?.id === post?.creator &&   <div className="post-detail__buttons">
          <Link to ={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
           <DeletePost postId={id}/>
          {/* <Link to ={"/posts/wewee/delete"} className='btn sm danger'>Delete</Link> */}
        </div>}
      
      </div>
      <h1>
        {post.title}
      </h1>
      <div className="post-detail__thumbnail">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt=""/>
      </div>
      {/* paragraph */}
      <p dangerouslySetInnerHTML={{__html:post.description}}></p>
    </div>}
      
   </section>
  )
}

export default PostDetail