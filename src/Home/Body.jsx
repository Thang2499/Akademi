import React from 'react'
import NavPage from './NavPage'
import Flashsale from './Flashsale'
import Categories from './Categories'
import BestSaleProducts from './BestSaleProducts'
import ExploreOurProducts from './ExploreOurProducts'
import Featured from './Featured'

const Body = () => {
  return (
    <>
    <NavPage/>
    <Flashsale/>
    <Categories/>
    <BestSaleProducts/>
    <ExploreOurProducts/>
    <Featured/>
    </>
  )
}

export default Body