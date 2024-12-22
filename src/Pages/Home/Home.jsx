import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import FeaturesSectionComponent from '../../Components/FeaturesSectionComponent/FeaturesSectionComponent'
import ProductSectionComponent from "../../Components/ProductSectionComponent/ProductSectionComponent";


export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <ProductSectionComponent />
      <UseCasesSectionComponent />
      <FeaturesSectionComponent />
      <FAQSectionComponent mode="Home" />
    </>
  )
}
