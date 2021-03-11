import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

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
    path: '/about-us'
  },
  {
    title: 'Login',
    path: '/login'
  }
]

export default function Nav({user}) {
  return (
    <nav className="nav-bar">
      <span className="menu-title">Habit</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))
          }
        </ul>
        <span>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
        <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
    </nav>
  );
}