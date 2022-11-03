import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h2>Skills</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Dev</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>HTML</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>JavaScript</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>React Js</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>React Native</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>CSS</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Bootstrap</h4>
                            <small className='text-light'></small>
                        </article>
                    </div>
                </div>


                {/* END OF FRONTEND */}


                <div className='experience_backend'>
                    <h3>Backend Dev</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Node Js</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Express</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Mongo DB</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Joi</h4>
                            <small className='text-light'></small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <h4>Nodemailer</h4>
                            <small className='text-light'></small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience