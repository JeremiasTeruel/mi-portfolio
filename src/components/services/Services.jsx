import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h2>Mis servicios</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>FrontEnd</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                {/* END OF DISEÑO */}

                <article className='service'>
                    <div className='service_head'>
                        <h3>BackEnd</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

                {/* END OF DISEÑO */}

                <article className='service'>
                    <div className='service_head'>
                        <h3>Diseño y Desarrollo Web</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BsCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services