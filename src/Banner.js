import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GithubIcon, LinkedInIcon } from './Icons';
 
const Banner = () => (
  <div className="navbar">
  <nav>
    <ul>
      <li>
    <NavLink to="/" className="title">Posts</NavLink>
    </li>
    <li>
    <NavLink to="/contact" className="title">Contact</NavLink>
    </li>
    <li>
      <Link href="/">
        <GithubIcon/>
      </Link>
    </li>
    <li>
      <Link href="/">
        <LinkedInIcon/>
      </Link>
    </li>
    </ul>
  </nav>
</div>
);

export default Banner;