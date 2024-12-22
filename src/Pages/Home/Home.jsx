import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import FeaturesSectionComponent from '../../Components/FeaturesSectionComponent/FeaturesSectionComponent'

export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <UseCasesSectionComponent />
      <FeaturesSectionComponent />
      <FAQSectionComponent mode="Home" />
    </>
  )
}
