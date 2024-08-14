/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
// components/Navbar.tsx
import { Link } from '@remix-run/react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/Aboutme'>About Me</Link></li>
      <li>
          <a>Projects</a>
          <ul className="p-2">
            <li><a href='https://bimaadamrin.my.id'>My Profile</a></li>
            <li><a href='https://chataibima.bimaadamrin.my.id'>Chat Ai</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">
  BimaAdam
  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/Aboutme'>About Me</Link></li>
      <li>
        <details>
          <summary>Projects</summary>
          <ul className="p-2">
            <li><a href='https://bimaadamrin.my.id'>My Profile</a></li>
            <li><a href='https://chataibima.bimaadamrin.my.id'>Chat Ai</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Contact me</a>
    <ThemeSwitcher />
  </div>
</div>
        
         
  )
}

export default Navbar;
