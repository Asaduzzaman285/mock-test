import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Service from '../../components/Service/Service'
import Metting from '../../components/Mettings/Metting'
import Apply from '../../components/Apply/Apply'
import Courses from '../../components/Courses/Courses'
import Fact from '../../components/Facts/Fact'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Service/>
      <Metting/>
      <Apply/>
      <Courses/>
      <Fact/>
      <Contact/>

    </div>
  )
}

export default Home
