import React from 'react'
import HomeTopSlider from './HomeTopSlider'
import TopBooks from './TopBooks'

const Home = () => {
  return (
    <div className='pl-60 pr-4  pb-1 -z-20 pt-32'>
      <div>
        <HomeTopSlider/>
      </div>

      <div>
        <TopBooks/>
      </div>
    </div>
  )
}

export default Home
