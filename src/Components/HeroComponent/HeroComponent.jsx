import React, { useEffect, useState } from 'react'
import './HeroComponent.css'
import tickIcon from '../../assets/imgs/Home_icons/tick-Icon.png'
import { Link } from 'react-router-dom'
import DollarSign from '../../assets/imgs/Home_icons/Shape.png'
import EuroSign from '../../assets/imgs/Home_icons/euro-currency-symbol.png'
import Bitcoin from '../../assets/imgs/Home_icons/Shape2.png'
import ethereum from '../../assets/imgs/Home_icons/Group.png'
import plus from '../../assets/imgs/Home_icons/Vector3.png'
import TransIcon from '../../assets/imgs/Home_icons/Vector2.png'
import TitleComponent from '../TitleComponent/TitleComponent'
import CurrencySelect from '../CurrencySelect/CurrencySelect'

const TransactionBox = ({ name, amount, opacityClass, index }) => (
  <div className={`es-trans-box ${opacityClass}`} data-aos="fade-up" data-aos-delay={index * 200}>
    <div className="es-trans-box-left">
      <div className="es-icon">
        <img src={TransIcon} alt="Transaction Icon" />
      </div>
      <div className="es-tran-details">
        <span className='fw-300'>Transaction</span>
        <span className='fw-400'>{name}</span>
      </div>
    </div>
    <div className="es-trans-box-right fw-500">
      {amount}
    </div>
  </div>
);

export default function HeroComponent() {
  const [amount, setAmount] = useState('5,000');
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("12.000");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  // function to fetch the exchange rate and update the result

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something went wrong!");
      const data = await response.json();
      const numericAmount = parseFloat(amount);
      const rate = (data.conversion_rate * numericAmount).toFixed(2);
      setResult(`${rate}`)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  //fetch exchange rate on initial render
  useEffect(() => getExchangeRate, []);

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
              fw={false}
            />
          </div>
          {!isLogin && (
          <div className="es-hero-btn f-18">
            <Link to='./signUp'>Open Account</Link>
          </div>
        )}

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
              <TransactionBox name="Joel Kenley" amount="-$68.00" opacityClass="op-100" index='1' />
              <TransactionBox name="Mark Smith" amount="-$68.00" opacityClass="op-50" index='2' />
              <TransactionBox name="Lenen Roy" amount="-$68.00" opacityClass="op-20" index='3' />
            </div>
            <form className="exchange converter-form" onSubmit={handleFormSubmit}>
              <h4 className='fw-500'>Money Exchange</h4>
              <div className="es-exchange-box">
                <div className="es-mini-box">
                  <div className='es-upper'>
                    <CurrencySelect
                      selectedCurrency={fromCurrency}
                      handleCurrency={e => setFromCurrency(e.target.value)}
                    />
                  </div>
                  <div className="es-currency-value">
                    <input
                      type="text"
                      className="form-input"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="es-mini-box">
                  <div className='es-upper'>
                    <CurrencySelect
                      selectedCurrency={toCurrency}
                      handleCurrency={e => setToCurrency(e.target.value)}
                    />
                  </div>
                  <div className="es-currency-value exchange-rate-result">
                    {isLoading ? 0.00 : result}
                  </div>
                </div>
              </div>
              <button className={`exchange-btn submit-button fw-400 ${isLoading ? "loading" : ""}`}>Exchange</button>
            </form>
          </div>
          <div className="es-supported-currency">
            <div className="es-supported-currency-container">
              <span className='fw-400'>Supported Currency</span>
              <div className="es-currency-icons">
                {[
                  { src: DollarSign, alt: "Dollar Sign" },
                  { src: EuroSign, alt: "Euro Sign" },
                  { src: Bitcoin, alt: "Bitcoin sign" },
                  { src: ethereum, alt: "ethereum sign" }
                ].map((currency, index) => (
                  <div className="es-currency-img" key={index}>
                    <img src={currency.src} alt={currency.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
