import React from 'react'
import './HeaderComponent.css'
import HeroComponent from '../HeroComponent/HeroComponent'
import NavBarComponent from '../NavBarComponent/NavBarComponent'
export default function HeaderComponent() {
  return (
    <>
      <header>
        <NavBarComponent/>
        <HeroComponent/>
      </header>
    </>
  )
}
