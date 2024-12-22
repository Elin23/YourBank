import React from 'react'
import HeaderComponent from './../../Components/HeaderComponent/HeaderComponent'
import ProductSectionComponent from './../../Components/ProductSectionComponent/ProductSectionComponent'
import UseCasesSectionComponent from './../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from './../../Components/FAQSectionComponent/FAQSectionComponent'
import FeaturesSectionComponent from './../../Components/FeaturesSectionComponent/FeaturesSectionComponent'
import AdSectionComponent from './../../Components/AdSectionComponent/AdSectionComponent'
import AdSecData from './../../Data/AdSectionData'

export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <ProductSectionComponent />
      <UseCasesSectionComponent />
      <FeaturesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <AdSectionComponent DATA={AdSecData[0]} />
    </>
  )
}

