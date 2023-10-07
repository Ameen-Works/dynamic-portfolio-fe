import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>

            <a rel='noreferrer' href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
            <a rel='noreferrer' href='https://github.com' target='_blank'><FaGithub></FaGithub></a>
            <a href='https://myPortfolio.com' target='_blabk'><TbWorldWww></TbWorldWww></a>
        </div>
    )
}

export default HeaderSocials