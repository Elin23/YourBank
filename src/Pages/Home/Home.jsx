import React from 'react'
import HeaderComponent from './../../Components/HeaderComponent/HeaderComponent'
import ProductSectionComponent from './../../Components/ProductSectionComponent/ProductSectionComponent'
import UseCasesSectionComponent from './../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from './../../Components/FAQSectionComponent/FAQSectionComponent'
import FeaturesSectionComponent from './../../Components/FeaturesSectionComponent/FeaturesSectionComponent'
import AdSectionComponent from './../../Components/AdSectionComponent/AdSectionComponent'
import AdSecData from './../../Data/AdSectionData'
import TestimonialsSectionComponent from './../../Components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <HeaderComponent/>
      <ProductSectionComponent />
      <UseCasesSectionComponent />
      <FeaturesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <TestimonialsSectionComponent/>
      <AdSectionComponent DATA={AdSecData[0]} />
      <FooterComponent />
    </div>
  )
}

