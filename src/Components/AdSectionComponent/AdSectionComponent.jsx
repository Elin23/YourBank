import './AdSectionComponent.css';
import toRightDown from './../../assets/imgs/AbstractDesign3.png';
import { Link } from 'react-router-dom';
import adSecBg from './../../assets/imgs/blend.png';
import TitleComponent from '../TitleComponent/TitleComponent';
import { useEffect, useState } from 'react';

export default function AdSectionComponent({ DATA }) {
  const [isLogin, setIsLogin] = useState(false);

  // Hide the "Open Account" button when signed in and re-display it again upon logging out
  useEffect(() => {

    const StoredUser = JSON.parse(localStorage.getItem('user'));
    setIsLogin(!!StoredUser);

    const handleLoginStatusChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem('user'));
      setIsLogin(!!updatedUser);
    };

    window.addEventListener('loginStatusChanged', handleLoginStatusChange);

    return () => {
      window.removeEventListener('loginStatusChanged', handleLoginStatusChange);
    };
  }, []);

  return (
    <div className='AdSectionComponent px-162'>
      <div className="hw-AdSectionContent" data-aos="zoom-in" data-aos-delay="200">
        <img src={adSecBg} className='hw-AdSecBg' />
        <img src={toRightDown} className='toRightDown' />
        <div className="hw-AdSecRight">
          <TitleComponent
            title={DATA.title}
            desc={DATA.desc}
            highlightedWords={['YourBank today!']}
            fw={true}
          />
        </div>

        {!isLogin && (
          <button className="hw-AdSecleft">
            <Link to={'/signUp'}>
              Open Account
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

