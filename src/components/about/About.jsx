import React from 'react'
import './About.css'
import ME from '../../assets/yo2.JPG'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {TbAward} from 'react-icons/tb'

const About = () => {
    return (
        <section id='about'>
            <h2>Sobre mi</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className="about_me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className='about_content'>
                    <div className="about_cards">
                        <article className='about_card'>
                            <AiOutlineFundProjectionScreen className='about_icon'/>
                            <h5>Experiencia</h5>
                            <small>+700hs de experiencia FrontEnd y BackEnd</small>
                        </article>
                        <article className='about_card'>
                            <AiOutlineProject className='about_icon'/>
                            <h5>Proyectos</h5>
                            <small>+5 proyectos individuales y grupales</small>
                        </article>
                        <article className='about_card'>
                            <TbAward className='about_icon'/>
                            <h5>Educación</h5>
                            <small>Egresado Bootcamp Full Stack MERN de MindHub</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora, similique voluptate facilis, asperiores laudantium corporis omnis earum saepe quis vel ullam sint doloremque? Laborum eaque dolore maiores non adipisci.</p>
                </div>
            </div>
        </section>
    )
}

export default About