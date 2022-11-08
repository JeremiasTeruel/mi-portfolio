import React from 'react'
import './Portfolio.css'
import AMEV from '../../assets/amazing_events.png'
import MYTN from '../../assets/mytinerary.png'
import MYTNNAT from '../../assets/mytinerary_native.jpeg'
import MDY from '../../assets/mindy.png'
import SPT from '../../assets/sportacus.png'

const data = [
    {
        id: 1,
        image: AMEV,
        tittle: 'Amazing Events',
        github: 'https://github.com/JeremiasTeruel/amazing-events'
    },
    {
        id: 2,
        image: MYTN,
        tittle: 'MyTinerary',
        github: 'https://github.com/Mirimartinez/mytinerary-martinez-zacarias'
    },
    {
        id: 3,
        image: MDY,
        tittle: 'Mindy Pet Shop',
        github: 'https://github.com/alemartinn/mindy-petshop'
    },
    {
        id: 4,
        image: SPT,
        tittle: 'Sportacus',
        github: 'https://github.com/diego-nahuel/sportacus',
        page: 'https://sportacus-host.vercel.app'
    },
    {
        id: 5,
        image: MYTNNAT,
        tittle: 'MyTinerary Native',
        github: 'https://github.com/JeremiasTeruel/MyTynerary-Teruel-RN'
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Mi Portfolio</h2>

            <div className='container portfolio_container'>
                {
                    data.map(({id,image, tittle, github, page}) => {
                        return(
                            <article key={id} className='portfolio_item'>
                                <h3>{tittle}</h3>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt={tittle} />
                                </div>
                                <div className='portfolio_item-cta'>
                                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Ver en GitHub</a>
                                </div>
                                <div className='portfolio_item-cta'>
                                    <a href={page} className='btn' target='_blank' rel='noreferrer'>Ver Pagina</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio