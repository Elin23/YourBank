
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import React from 'react'
import UseCasesSectionComponent from '../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import ProductSectionComponent from "../../Components/ProductSectionComponent/ProductSectionComponent";
import MissionVisionComponent from '../../Components/MissionVisionComponent/MissionVisionComponent';


export default function Home() {
  return (
    <>
      <UseCasesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <ProductSectionComponent />
      <MissionVisionComponent/>


    </>
  )
}
