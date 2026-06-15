import React from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Footer from "./component/Footer"
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
const App = () => {
  return (
    <div>
   <Header/>
  <Banner/>
  <Footer/>
    </div>
  )
}

export default App