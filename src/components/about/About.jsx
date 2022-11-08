import React from 'react'
import './About.css'
import ME from '../../assets/yo2.JPG'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {TbAward} from 'react-icons/tb'
import insignia from '../../assets/insigniaMindHub.png'

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

                    <div className='insignia'>
                        <p>Programador junior Full Stack MERN, egresado del bootcamp de MindHub de +700hs de entrenamiento y simulación de ambiente laboral, utilizando metodologias agiles, scrum y "learning by doing", y tecnologias como HTML, CSS, JavaScript, React Js, React Native, Node Js, Express, Mongo DB, API REST, Nodemailer, Joi, Nodemon, Mongoose.</p>
                        <img src={insignia} alt="logo" className='insignia_img'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About