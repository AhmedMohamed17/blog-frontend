import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({thumbnail, category, title, desc, authorID, PostID ,createdAt}) => {
  console.log("thumbnail",thumbnail)
 const shortDesc = desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
 const PostTitle = title.length > 50 ? title.substring(0, 50) + "..." : title;
  return (
  <article className='post'>
    <div className='post__thumbnail'>
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />

    </div>
    <div className='post__content'>
        <Link to={`/posts/${PostID}`}>
        <h3>{PostTitle}</h3>
        </Link>
        {/* <p>{shortDesc}</p> */}
        <p dangerouslySetInnerHTML={{__html:shortDesc}}/>
        <div className='post__footer'>
            <PostAuthor authorID={authorID} createdAt={createdAt}/>
            <Link to={`posts/categories/${category}`} className="btn category">{category}</Link>

        </div>
    </div>

  </article>
  )
}

export default PostItem