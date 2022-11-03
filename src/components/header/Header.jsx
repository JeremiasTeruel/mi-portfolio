import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Teruel_Jeremias.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="header_container">
                <div className='imagen-nombre'>
                    <HeaderSocials/>
                    <div>
                        <h5>Hola, soy</h5>
                        <h1>Jeremias Teruel</h1>
                        <h5 className="text-light">Full Stack Developer</h5>
                    </div>
                    <div className="me">
                        <img src={ME} alt='yo' className='yo'/>
                    </div>
                </div>
                <CTA />

            </div>
        </header>
    )
}

export default Header