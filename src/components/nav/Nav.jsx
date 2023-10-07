import React, { useState } from 'react'
import "./Nav.css"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#top');
    return (
        <nav>
            <a href="#top" onClick={() => { setActiveNav('#top') }} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome /> </a>
            <a href="#about" onClick={() => { setActiveNav('#about') }} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /> </a>
            <a href="#portfolio" onClick={() => { setActiveNav('#portfolio') }} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook /> </a>
            <a href="#testimonials" onClick={() => { setActiveNav('#testimonials') }} className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceLine /> </a>
            <a href="#contact" onClick={() => { setActiveNav('#contact') }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /> </a>
        </nav>
    )
}

export default Nav