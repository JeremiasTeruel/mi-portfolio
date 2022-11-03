import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TfiInstagram} from 'react-icons/tfi'
import {FaFacebookF} from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/jeremias-teruel/'><BsLinkedin/></a>
            <a href='https://github.com/JeremiasTeruel'><FaGithub/></a>
            <a href='https://www.instagram.com/terueljjj/'><TfiInstagram/></a>
            <a href='https://www.facebook.com/jere.teruel/'><FaFacebookF/></a>
        </div>
    )
}

export default HeaderSocials