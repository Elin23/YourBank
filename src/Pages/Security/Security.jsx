import React from 'react'
import HeroComponent2 from '../../Components/HeroComponent2/HeroComponent2'
import IMG3 from '../../assets/imgs/Hero/HeroImage3.png'
export default function Security() {
  return (
    <>
    <HeroComponent2 
    image={IMG3} 
    head={"Your Security is Our Top Priority"} 
    light={"Top Priority"}
    disc={"At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."}/>
    </>
  )
}


