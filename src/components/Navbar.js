import { NavLink } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { BurgerMenuIcon, CloseMenuIcon } from '../assets/icons';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/greeting', text: 'Greeting' },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen
        && ref.current
        && !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);
  return (
    <nav ref={ref} className="navbar">

      <NavLink to={links[0].path} onClick={() => setNavbarOpen(false)}>
        <span className="my-logo">My Logo</span>
      </NavLink>

      <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)} type="button">
        {navbarOpen ? (
          <CloseMenuIcon />

        ) : (
          <BurgerMenuIcon />
        )}
      </button>

      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
