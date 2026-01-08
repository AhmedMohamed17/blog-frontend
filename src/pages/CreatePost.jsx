import React ,{useState ,useContext ,useEffect}from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import {UserContext} from "../Context/usercontext"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const CreatePost = () => {
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('Uncategorized');
  const [description,setDescription]=useState('');  
  const [thumbnail,setThumbnail]=React.useState('');
  const navigate = useNavigate()
  const [error , setError]= useState('')
  const {currentUser} =useContext(UserContext)
  const token = currentUser?.token;
  // redirect to login page for any user who isn't logged in
  useEffect(()=>{
    if(!token){
      navigate("/login")
    }
  },[token, navigate]) // i changed for netlify deploy
  const POST_CATEGORIES = ['Agricluture', 'Business', 'Education', 'Entertainment', 'Art', 'Investment', 'Weather', 'Uncategorized'];
  
    const createPost =async(e)=>{
      e.preventDefault();
      const postData =new FormData();
      postData.set('title',title);
      postData.set('category',category);
      postData.set('description',description)
      postData.set('thumbnail',thumbnail)
      try{
       const response =await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`,postData,
        {withCredentials:true , headers:{Authorization:`Bearer ${token}`}})
          if(response.status === 201){
            return navigate('/')
          }
      }
      catch(err){
          setError(err.response.data.message)
      }

    }
  
  
  
  return (
   <section className="create-post">
    <div className='container'>
      <h2>Create Post</h2>
     {error &&  <p className='form__error-message'>{error}</p>}
      <form className='form create-post__form' onSubmit={createPost}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>
        <select  value={category} onChange={(e) => setCategory(e.target.value)} >
  { POST_CATEGORIES.map((cat) => (
    <option key={cat} value={cat}>{cat}</option>
  )) }
  </select>
  <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* <ReactQuill theme="snow" value={description} onChange={setDescription} modules={modules} formats={formats} placeholder="Write something awesome..." /> */}
  <input type="file"  onChange={(e) => setThumbnail(e.target.files[0])}  accept='png, jpg, jpeg'/>
  <button className='btn primary'>Create</button>
      </form>
    </div>
   </section>
  )
}

export default CreatePost