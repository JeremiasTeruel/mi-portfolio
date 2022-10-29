import React from 'react'
import CV from '../../assets/Teruel_Jeremias_CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn'>Descargar CV</a>
            <a href='#contact' className='btn btn-primary'>Contactame</a>
        </div>
    )
}

export default CTA