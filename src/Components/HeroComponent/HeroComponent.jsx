import React from 'react'
import './HeroComponent.css'
import tickIcon from '../../assets/imgs/Home icons/tick-Icon.png'
import { Link } from 'react-router-dom'
import imgScreen from '../../assets/imgs/blend.png'
import TransIcon from '../../assets/imgs/Home icons/Vector2.png'
import INRImg from '../../assets/imgs/Home icons/Image.png'
import USDImg from '../../assets/imgs/Home icons/Image1.png'
import DollarSign from '../../assets/imgs/Home icons/Shape.png'
import EuroSign from '../../assets/imgs/Home icons/euro-currency-symbol.png'
import Bitcoin from '../../assets/imgs/Home icons/Shape2.png'
import ethereum from '../../assets/imgs/Home icons/Group.png'
import plus from '../../assets/imgs/Home icons/Vector3.png'
import TitleComponent from '../TitleComponent/TitleComponent'
export default function HeroComponent() {
  return (
    <>
      <div className='es-hero-container px-162 pb-150'>
        <div className='es-hero-left-content'>
          <div className='es-sub-title'>
            <img src={tickIcon} alt="tick-icon" />
            <span className='fw-300'>No LLC Required, No Credit Check.</span>
          </div>
          <div className="es-main-title">
            <TitleComponent
              title="Welcome to YourBank Empowering Your Financial Journey"
              desc="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
              highlightedWords={["Financial", "Journey"]}
            />
          </div>
          <div className="es-hero-btn f-18">
            <Link to='./signUp'>Open Account</Link>
          </div>
        </div>
        <div className="es-right-side">
          <div className="es-monthly-income">
            <div className="es-icon">
              <img src={plus} alt="plus Icon" />
            </div>
            <div className="es-plus-info">
              <span className='fw-400'>+ $5000,00</span>
              <span className='fw-300'>Monthly Income</span>
            </div>
          </div>
          <div className='es-hero-right-content'>
            <div className='bg-img' alt="imgScreen" />
            <div className="es-your-trans">
              <h4 className='fw-500'>Your Transactions</h4>
              {/* box-1- */}
              <div className="es-trans-box op-100">
                <div className="es-trans-box-left">
                  <div className="es-icon">
                    <img src={TransIcon} alt="Transaction Icon" />
                  </div>
                  <div className="es-tran-details">
                    <span className='fw-300'>Transaction</span>
                    <span className='fw-400'>Joel Kenley</span>
                  </div>
                </div>
                <div className="es-trans-box-right fw-500">
                  -$68.00
                </div>
              </div>
              {/* box-2- */}
              <div className="es-trans-box op-50">
                <div className="es-trans-box-left">
                  <div className="es-icon">
                    <img src={TransIcon} alt="Transaction Icon" />
                  </div>
                  <div className="es-tran-details">
                    <span className='fw-300'>Transaction</span>
                    <span className='fw-400'>Mark Smith</span>
                  </div>
                </div>
                <div className="es-trans-box-right fw-500">
                  -$68.00
                </div>
              </div>
              {/* box-3- */}
              <div className="es-trans-box op-20">
                <div className="es-trans-box-left">
                  <div className="es-icon">
                    <img src={TransIcon} alt="Transaction Icon" />
                  </div>
                  <div className="es-tran-details">
                    <span className='fw-300'>Transaction</span>
                    <span className='fw-400'>Lenen Roy</span>
                  </div>
                </div>
                <div className="es-trans-box-right fw-500">
                  -$68.00
                </div>
              </div>
            </div>
            <div className="exchange">
              <h4 className='fw-500'>Money Exchange</h4>
              <div className="es-exchange-box">
                <div className="es-mini-box">
                  <div className='es-upper'>
                    <div className="es-currency">
                      <img src={INRImg} alt="indian flag" />
                      <span className='fw-400'>INR</span>
                    </div>
                    <div className="es-currency-name fw-300">Indian Rupees</div>
                  </div>
                  <div className="es-currency-value">
                    5,0000
                  </div>
                </div>
                <div className="es-mini-box">
                  <div className='es-upper'>
                    <div className="es-currency">
                      <img src={USDImg} alt="USA flag" />
                      <span className='fw-400'>USD</span>
                    </div>
                    <div className="es-currency-name fw-300">United States Dollar</div>
                  </div>
                  <div className="es-currency-value">
                    12.00
                  </div>
                </div>
              </div>
              <button className='exchange-btn fw-400'>Exchange</button>
            </div>
          </div>
          <div className="es-supported-currency">
            <div className="es-supported-currency-container">
              <span className='fw-400'>Supported Currency</span>
              <div className="es-currency-icons">
                <div className="es-currency-img">
                  <img src={DollarSign} alt="Dollar Sign" />
                </div>
                <div className="es-currency-img">
                  <img src={EuroSign} alt="Euro Sign" />
                </div>
                <div className="es-currency-img">
                  <img src={Bitcoin} alt="Bitcoin sign" />
                </div>
                <div className="es-currency-img">
                  <img src={ethereum} alt="ethereum sign" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
