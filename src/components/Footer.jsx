import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <ul className='footer__categories'>
      <li>
        <Link to="/posts/categories/agriculture">Agriculture</Link>
      </li>
       <li>
        <Link to="/posts/categories/business">Business</Link>
      </li>
       <li>
        <Link to="/posts/categories/Education">Education</Link>
      </li>
       <li>
        <Link to="/posts/categories/entertainment">Entertainment</Link>
      </li>
       <li>
        <Link to="/posts/categories/art">Art</Link>
      </li>
       <li>
        <Link to="/posts/categories/investment">Investment</Link>
      </li>
       <li>
        <Link to="/posts/categories/Uncategorized">Uncategorized</Link>
      </li>
       <li>
        <Link to="/posts/categories/Weather">Weather</Link>
      </li>

    </ul>
    <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyrights, Ahmed Sayed</small>
    </div>
   </footer>
  )
}

export default Footer;