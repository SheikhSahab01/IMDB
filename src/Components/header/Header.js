import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <div className="headerleft">
            {/* <Link to="/" ><span>MOVIESPRO</span></Link> */}
            <Link to="/" ><img className="header__icon" src="https://ik.imagekit.io/uazn82tha/mmm_2SLbn6IlK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660070775087" /></Link>
            <Link to="/movies/popular" ><span>Popular</span></Link>
            <Link to="/movies/top_rated" ><span>Top Rated</span></Link>
            <Link to="/movies/upcomming" ><span>Upcomming</span></Link>
        </div>
    </div>
  )
}

export default Header