import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'


export default function Home() {
  return (
    <>
      <HeaderComponent/>
      <UseCasesSectionComponent />
      <FAQSectionComponent mode="Home" />
    </>
  )
}
