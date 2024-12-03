import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import React from 'react'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FeaturesSectionComponent from '../../Components/FeaturesSectionComponent/FeaturesSectionComponent'


export default function Home() {
  return (
    <>
      <UseCasesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <FeaturesSectionComponent />
    </>
  )
}
