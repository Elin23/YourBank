import React from 'react'
import TestimonialsSectionComponent from '../../Components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'


export default function Home() {
  return (
    <>
      <UseCasesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <TestimonialsSectionComponent />
    </>
  )
}
