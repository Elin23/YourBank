import { Link } from 'react-router-dom'
import './FooterComponent.css'
import icon1 from './../../assets/imgs/Home icons/Icon (13).png'
import icon2 from './../../assets/imgs/Home icons/Icon (14).png'
import icon3 from './../../assets/imgs/Home icons/Icon (15).png'
import faceIcon from './../../assets/imgs/Home icons/Icon (16).png'
import twitterIcon from './../../assets/imgs/Home icons/Icon (17).png'
import linkdenIcon from './../../assets/imgs/Home icons/Vector.png'
import logo from './../../assets/imgs/Logo.png'
import yourBank from './../../assets/imgs/YourBanK.svg'
export default function FooterComponent() {
    return (
    <>
    <footer className='hw-footer px-162'>
        <div className="hw-logo">
            <img src={logo} className='logo'/>
            <img src={yourBank} className='logoName'/>
        </div>
        <ul className="hw-footerLinks">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/careers'}>Careers</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/security'}>Security</Link>
            </li>
        </ul>
        <span className="hw-lineGray"></span>
        <div className="hw-Contacts">
            <div className='email'>
                <div className="hw-Contacts-icon">
                    <img src={icon1} alt="" />
                </div>
                <p>hello@skillbirdge.com</p>
            </div>
            <div className='phoneNum'>
                <div className="hw-Contacts-icon">
                    <img src={icon2} alt="" />
                </div>
                <p>+91 91813 23 2309</p>
            </div>
            <div className='location'>
                <div className="hw-Contacts-icon">
                    <img src={icon3} alt="" />
                </div>
                <p>Somewhere in the World</p>
            </div>
        </div>
        <span className="hw-lineGray"></span>

        <div className="hw-footerBottom">
            <div className="hw-footerIcons">
                <div className="hw-fotIconConta">
                    <img src={faceIcon} />
                </div>
                <div className="hw-fotIconConta">
                    <img src={twitterIcon} />
                </div>
                <div className="hw-fotIconConta">
                    <img src={linkdenIcon}  />
                </div>
            </div>
            <span>YourBank All Rights Reserved</span>
            <div className="hw-footerPrivacy">
                <Link to={''} >Privacy Policy</Link>
                <span className="lineF"></span>
                <Link to={''}>Terms Of Service</Link>
            </div>
        </div>
    </footer>
    </>
    )
}
