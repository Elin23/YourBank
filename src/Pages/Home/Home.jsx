
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import React from 'react'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'


export default function Home() {
  return (
    <>
      <UseCasesSectionComponent />
      <FAQSectionComponent mode="Home" />


    </>
  )
}
