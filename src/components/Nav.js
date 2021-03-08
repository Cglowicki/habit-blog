import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'About us',
    path: '/contact-us'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

export default function Nav() {
  return (
    <nav className="nav-bar">
      <span>Habit</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))
        }
      </ul>
    </nav>
  );
}