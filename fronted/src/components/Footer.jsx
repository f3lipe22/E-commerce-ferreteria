/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

const title = "Acerca de nuestra tienda";
const desc = "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categorias";
const quickTitle = "Productos";
const tweetTitle = "Twits recientes";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Neiva(Huila), Colombia.',
    },
    {
        iconName: 'icofont-phone',
        text: '0800-00200',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'Inicio',
        link: '/shop',
    },
    {
        text: 'Productos',
        link: '/shop',
    },
    {
        text: 'Acerca de.',
        link: '/about',
    },
    {
        text: 'Politicas',
        link: '#',
    },
    {
        text: 'Preguntas Frecuentes',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Iluminacion y Electrico',
        link: '#',
    },
    {
        text: 'Herramientas Manuales',
        link: '#',
    },
    {
        text: 'Herramientas Electricas',
        link: '#',
    },
    {
        text: 'Materiales',
        link: '#',
    },
    {
        text: 'Tornilleria',
        link: '#',
    },
    {
        text: 'Plomeria',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]

const Footer = () => {
  return (
    <footer className="style-2">
    <div>
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row g-3 row-cols-xl-4 row-cols-sm-1 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {addressList.map((val, i) => (
                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item twiter-post">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {ItemList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                          <div  className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {quickList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                        </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item twitter-post">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{tweetTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {tweetList.map((val, i) => (
                                            <li key={i}>
                                                <i className={val.iconName}></i>
                                                {val.desc}
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
        <div>
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2023 <Link to="/"> Feretería Arce</Link> Derechos de autor <a href="https://themeforest.net/user/CodexCoder" target="_blank">AFD</a> </p>
                <div className="footer-bottom-list">
                    {footerbottomList.map((val, i) => (
                        <a href={val.link} key={i}>{val.text}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
</footer>
  )
}

export default Footer