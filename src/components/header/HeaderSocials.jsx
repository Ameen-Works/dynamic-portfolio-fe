import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>

            <a rel='noreferrer' href='https://www.linkedin.com/in/mohamed-arshath-ameen/' target='_blank'><BsLinkedin /></a>
            <a rel='noreferrer' href='github.com/Ameen-Works?tab=repositories' target='_blank'><FaGithub></FaGithub></a>
            <a href='#portfolio' target='_blabk'><TbWorldWww></TbWorldWww></a>
        </div>
    )
}

export default HeaderSocials