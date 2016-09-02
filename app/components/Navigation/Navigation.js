import React from 'react'
import { container, navContainer, link } from './styles.css'

const NavLinks = () => {
  return (
    <ul>
      <li className={link}>{ 'Home' }</li>
    </ul>
  )
}

const ActionLinks = () => {
  return (
    <ul>
      <li className={link}>{ 'somelink' }</li>
      <li className={link}>{ 'another link' }</li>
    </ul>
  )
}

const Navigation = () => {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks />
        <ActionLinks />
      </nav>
    </div>
  )
}

export default Navigation
