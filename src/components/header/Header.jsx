import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Teruel_Jeremias.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hola, soy</h5>
                <h1>Jeremias Teruel</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt='yo'/>
                </div>
            </div>
        </header>
    )
}

export default Header