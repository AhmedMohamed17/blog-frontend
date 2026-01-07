import React ,{useState,useEffect}from 'react'
import PostItem from '../components/PostItem';
import Loader from '../components/loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CategoryPosts = () => {
     const [posts,setPosts] = useState([]);
      const [isLoading,setIsLoading] =useState(false);

     const {category} =useParams();

      useEffect(()=>{
        const fetchPosts =async()=>{
             setIsLoading(true);
              try{ 
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
         setPosts(response?.data);
      
        }
        catch(err){
           console.log(err)
        }
          setIsLoading(false);
        }
      
        fetchPosts();
       
      },[])
     if(isLoading){
      return <Loader/>
     }
  
  
  
  
    return (
     <section className='posts'>
     {posts.length > 0 ? <div className='container posts__container'>
      {
          posts.map(({_id:id,thumbnail,category,title,description,creator ,createdAt})=>
          <PostItem key={id} thumbnail={thumbnail} category={category} title={title} desc={description} authorID={creator} PostID={id} createdAt={createdAt}/>)
      }
      </div> : <h2 className='center'>No posts available </h2> }
     </section>
  )
}

export default CategoryPosts

