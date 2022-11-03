import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import {RiMailAddLine} from 'react-icons/ri'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const Contac = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6uwz50d', 'template_kip23yg', form.current, '3FlhSFPIm_9WaHCs7')
        
        e.target.reset()
        };

    return (
        <section id='contact'>
            <h2>Contactame</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <RiMailAddLine className='contact_icon'/>
                        <h4>Mail</h4>
                        <a href='mailto:jteruel8@gmail.com' target="_blank" rel='noreferrer'>jteruel8@gmail.com</a>
                    </article>
                    <article className='contact_option'>
                        <BsMessenger className='contact_icon'/>
                        <h4>Messenger</h4>
                        <a href='https://m.me/jere.teruel' target="_blank" rel='noreferrer'>Jere Teruel</a>
                    </article>
                    <article className='contact_option'>
                        <AiOutlineWhatsApp className='contact_icon'/>
                        <h4>WhatsApp</h4>
                        <a href='https://api.whatsapp.com/send?phone=+5492616332318' target="_blank" rel='noreferrer'>Hablemos</a>
                    </article>
                </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Nombre' required/>
                        <input type="text" name='lastName' placeholder='Apellido' required />
                        <input type="text" name='email' placeholder='Email' required/>
                        <textarea name="message" cols="30" rows="10" placeholder='Tu mensaje...' required></textarea>
                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </form>
            </div>
        </section>
    )
}

export default Contac