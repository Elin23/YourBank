import { Link } from 'react-router-dom'
import './FooterComponent.css'
import icon1 from './../../assets/imgs/Home_icons/Icon (13).png'
import icon2 from './../../assets/imgs/Home_icons/Icon (14).png'
import icon3 from './../../assets/imgs/Home_icons/Icon (15).png'
import faceIcon from './../../assets/imgs/Home_icons/Icon (16).png'
import twitterIcon from './../../assets/imgs/Home_icons/Icon (17).png'
import linkdenIcon from './../../assets/imgs/Home_icons/Vector.png'
import nav_logo from '../../assets/imgs/logo.png'
import SocialFooterComponent from '../SocialFooterComponent/SocialFooterComponent'

export default function FooterComponent() {
    const socialIcons = [
        { src: faceIcon, alt: 'Facebook Link' },
        { src: twitterIcon, alt: 'Twitter Link' },
        { src: linkdenIcon, alt: 'LinkedIn Link' },
    ];
    return (
        <>
            <footer className='hw-footer px-162'>
                <img src={nav_logo} className="logo" data-aos="fade-up" />
                <ul className="hw-footerLinks" data-aos="fade-up">
                    <li>
                        <Link to={'/YourBank/'} className='hw-menu-link'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/YourBank/careers'} className='hw-menu-link'>Careers</Link>
                    </li>
                    <li>
                        <Link to={'/YourBank/about'} className='hw-menu-link'>About</Link>
                    </li>
                    <li>
                        <Link to={'/YourBank/security'} className='hw-menu-link'>Security</Link>
                    </li>
                </ul>
                <span className="hw-lineGray"></span>
                <div className="hw-Contacts">
                    <div className='email' data-aos="fade-up">
                        <div className="hw-Contacts-icon">
                            <img src={icon1} alt="Email address" />
                        </div>
                        <a href="mailto:hello@skillbirdge.com">hello@skillbirdge.com</a>
                    </div>
                    <div className='phoneNum' data-aos="fade-up">
                        <div className="hw-Contacts-icon">
                            <img src={icon2} alt="Phone Number" />
                        </div>
                        <a href="tel:+91 91813 23 2309">+91 91813 23 2309</a>
                    </div>
                    <div className='location' data-aos="fade-up">
                        <div className="hw-Contacts-icon">
                            <img src={icon3} alt="Location Information" />
                        </div>
                        <a href="#">Somewhere in the World</a>
                    </div>
                </div>
                <span className="hw-lineGray"></span>
                <div className="hw-footerBottom">
                    <SocialFooterComponent icons={socialIcons} />
                    <span className='f-18' data-aos="fade-up">YourBank All Rights Reserved</span>
                    <div className="hw-footerPrivacy" data-aos="fade-up">
                        <Link to={''} className='f-18'>Privacy Policy</Link>
                        <span className="lineF"></span>
                        <Link to={''} className='f-18'>Terms Of Service</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
