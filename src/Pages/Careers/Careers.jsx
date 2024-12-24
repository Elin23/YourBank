import React from 'react'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import OurValuesSectionComponent from '../../Components/OurValuesSectionComponent/OurValuesSectionComponent'
import JobComponent from "../../Components/JobComponent/JobComponent";

export default function Careers() {
  return (
    <div>
      <OurValuesSectionComponent/>
      <FAQSectionComponent />
      <JobComponent />
    </div>
  )
}

