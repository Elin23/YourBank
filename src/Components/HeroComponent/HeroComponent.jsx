import React, { useEffect, useState } from "react";
import "./HeroComponent.css";
import tickIcon from "../../assets/imgs/Home_icons/tick-Icon.png";
import { Link } from "react-router-dom";
import DollarSign from "../../assets/imgs/Home_icons/Shape.png";
import EuroSign from "../../assets/imgs/Home_icons/euro-currency-symbol.png";
import Bitcoin from "../../assets/imgs/Home_icons/Shape2.png";
import ethereum from "../../assets/imgs/Home_icons/Group.png";
import plus from "../../assets/imgs/Home_icons/Vector3.png";
import TitleComponent from "../TitleComponent/TitleComponent";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import TransactionBox from "../TransactionBox/TransactionBox";
// import AOS from "aos";
export default function HeroComponent() {
  // Exchange API needed Variables
  const [amount, setAmount] = useState("5,0000");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("12.00");
  const [isLoading, setIsLoading] = useState(false);

  // isLogin: to control the "open account" button visibility
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
      setResult(`${rate}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // AOS.init({
  //   duration: 800,
  //   delay: 200,
  // });

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  //fetch exchange rate on initial render
  useEffect(() => getExchangeRate, []);

  // Hide the "Open Account" button when signed in and re-display it again upon logging out
  useEffect(() => {
    const StoredUser = JSON.parse(localStorage.getItem("user"));
    setIsLogin(StoredUser);

    const handleLoginStatusChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setIsLogin(updatedUser);
    };

    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  return (
    <>
      <div className="es-hero-container px-162 pb-150">
        {/* Left Section */}
        <div
          className="es-hero-left-content"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="es-sub-title">
            <img src={tickIcon} alt="tick-icon" />
            <span className="fw-300">No LLC Required, No Credit Check.</span>
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
              <Link to="/signUp">Open Account</Link>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div
          className="es-right-side"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {/* Monthly Income Section */}
          <div className="es-monthly-income">
            <div className="es-icon">
              <img src={plus} alt="plus Icon" />
            </div>
            <div className="es-plus-info">
              <span className="fw-400">+ $5000,00</span>
              <span className="fw-300">Monthly Income</span>
            </div>
          </div>
          <div className="es-hero-right-content">
            <div className="bg-img" alt="imgScreen" />
            {/* Transactions Section */}
            <div className="es-your-trans">
              <h4 className="fw-500">Your Transactions</h4>
              {[
                {
                  name: "Joel Kenley",
                  amount: "-$68.00",
                  opacityClass: "op-100",
                },
                {
                  name: "Mark Smith",
                  amount: "-$68.00",
                  opacityClass: "op-50",
                },
                {
                  name: "Lenen Roy",
                  amount: "-$68.00",
                  opacityClass: "op-20",
                },
              ].map((box, index) => (
                <TransactionBox
                  key={index}
                  name={box.name}
                  amount={box.amount}
                  opacityClass={box.opacityClass}
                />
              ))}
            </div>

            {/* Exchange Form */}
            <form
              className="exchange converter-form"
              onSubmit={handleFormSubmit}
            >
              <h4 className="fw-500">Money Exchange</h4>
              <div className="es-exchange-box">
                <div className="es-mini-box">
                  <div className="es-upper">
                    <CurrencySelect
                      selectedCurrency={fromCurrency}
                      handleCurrency={(e) => setFromCurrency(e.target.value)}
                    />
                  </div>
                  <div className="es-currency-value">
                    <input
                      type="text"
                      className="form-input"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="es-mini-box">
                  <div className="es-upper">
                    <CurrencySelect
                      selectedCurrency={toCurrency}
                      handleCurrency={(e) => setToCurrency(e.target.value)}
                    />
                  </div>
                  <div className="es-currency-value exchange-rate-result">
                    {isLoading ? "0.00" : result}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`exchange-btn submit-button fw-400 ${
                  isLoading ? "loading" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Exchange"}
              </button>
            </form>
          </div>

          {/* Supported Currency Section */}
          <div className="es-supported-currency">
            <div className="es-supported-currency-container">
              <span className="fw-400">Supported Currency</span>
              <div className="es-currency-icons">
                {[
                  { src: DollarSign, alt: "Dollar Sign" },
                  { src: EuroSign, alt: "Euro Sign" },
                  { src: Bitcoin, alt: "Bitcoin sign" },
                  { src: ethereum, alt: "ethereum sign" },
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
      )
    </>
  );
}
