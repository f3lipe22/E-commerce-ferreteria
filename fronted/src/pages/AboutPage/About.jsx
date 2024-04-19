import React from 'react'
import PageHeader from '../../components/PageHeader';
const subTitle = "Acerca de nuestra tienda";
const title = "Buenos servicios de calificación y mejores experiencias.";
const desc = "Somos una ferretería que se dedica a la venta de herramientas, materiales de construcción y otros productos relacionados. Ofrecemos productos de alta calidad a precios competitivos. Nuestro objetivo es proporcionar a nuestros clientes un servicio excepcional y una experiencia de compra satisfactoria. Siempre estamos buscando formas de mejorar nuestros productos y servicios para satisfacer las necesidades de nuestros clientes. ¡Gracias por elegirnos!.";

const year = "40+";
const expareance = "Años de experiencia";

const aboutList = [
    {
        imgUrl: '/src/assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Servicio de calidad',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: '/src/assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'líderes en la región',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]

const About = () => {
  return (
    <div>
        <PageHeader title={'Acerca de nuestra tienda'} curPage={'Nuestra Tienda'} />
        <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="/src/assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="/src/assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About