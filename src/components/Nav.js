import React from 'react';

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
    title: 'Contact Us',
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
            {link.title}
          </li>
        ))

        }
      </ul>
    </nav>
  );
}