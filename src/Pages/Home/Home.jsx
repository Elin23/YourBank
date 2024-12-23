import React from 'react'
import UseCasesSectionComponent from './../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from './../../Components/FAQSectionComponent/FAQSectionComponent'
import AdSectionComponent from './../../Components/AdSectionComponent/AdSectionComponent'
import AdSecData from './../../Data/AdSectionData'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'
export default function Home() {
  return (
    <div>
      <UseCasesSectionComponent />
      <FAQSectionComponent />
      <AdSectionComponent DATA={AdSecData[0]} />
      <FooterComponent />
    </div>
  )
}

