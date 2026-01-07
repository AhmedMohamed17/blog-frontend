import  Thumbnail1 from '../images/blog7.jpg';
import  Thumbnail2 from '../images/blog2.jpg';
import  Thumbnail3 from '../images/blog3.jpg';
import  Thumbnail4 from '../images/blog6.jpg';

const DUMMY_POSTS=[
    {id:"1",
        thumbnail: Thumbnail1,
        category:"education",
        title:"First Post",
        desc:"this is the description of the first post",
        authorID:3
    },
    {id:"2",
         category:"science",
     thumbnail: Thumbnail2,
     title:"Second Post",
     desc:"this is the description of the second post",
     authorID:1   
    }
    ,{
        id:"3", 
        category:"weather",
        thumbnail: Thumbnail3,
        title:"Third Post", 
        desc:"this is the description of the third post",
        authorID:6
    }
    ,{
        id:"4",
         category:"farming",
        thumbnail: Thumbnail4,
        title:"Fourth Post",
        desc:"this is the description of the fourth post",
        authorID:5
    }


];
export default DUMMY_POSTS;