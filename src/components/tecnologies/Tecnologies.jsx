import React from 'react'
import './Tecnologies.css'
import JS from '../../assets/tecnologies/javascript.png'
import REACT from '../../assets/tecnologies/react.png'
import HTML from '../../assets/tecnologies/html.png'
import CSS from '../../assets/tecnologies/css.png'
import BOOT from '../../assets/tecnologies/bootstrap.png'
import NODE from '../../assets/tecnologies/node.png'
import MNG from '../../assets/tecnologies/mongo.png'
import EXP from '../../assets/tecnologies/express.png'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div id="carouselExampleControls" className="container carousel slide carousel_container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={JS} className="d-block w-100" alt="js" />
                    </div>
                    <div className="carousel-item">
                        <img src={REACT} className="d-block w-100" alt="react" />
                    </div>
                    <div className="carousel-item">
                        <img src={HTML} className="d-block w-100" alt="html" />
                    </div>
                    <div className="carousel-item">
                        <img src={CSS} className="d-block w-100" alt="css" />
                    </div>
                    <div className="carousel-item">
                        <img src={BOOT} className="d-block w-100" alt="bootstrap" />
                    </div>
                    <div className="carousel-item">
                        <img src={NODE} className="d-block w-100" alt="node" />
                    </div>
                    <div className="carousel-item">
                        <img src={MNG} className="d-block w-100" alt="mongo" />
                    </div>
                    <div className="carousel-item">
                        <img src={EXP} className="d-block w-100" alt="express" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Testimonials