import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TfiInstagram} from 'react-icons/tfi'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            {/* <ul className='permalinks'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#about">Sobre mi</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#portfolio">Mi Portfolio</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul> */}

            <div className='footer_socials'>
                <a href='https://www.linkedin.com/in/jeremias-teruel/'><BsLinkedin/></a>
                <a href='https://github.com/JeremiasTeruel'><FaGithub/></a>
                <a href='https://www.instagram.com/terueljjj/'><TfiInstagram/></a>
                <a href='https://www.facebook.com/jere.teruel/'><FaFacebookF/></a>
            </div>

            <div>
                <div className='footer_logo'>
                    <img src="https://static.wixstatic.com/media/210a8b_21678ffd45704f48824d740242ee77e5~mv2.png/v1/fill/w_214,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/software-developer-logo-02_edited.png" alt="logo" className='footer_img-logo'/>
                </div>
                <div className='footer_copyright'>
                    <small>Jeremías Teruel Full Stack Web Developer | 2022</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer