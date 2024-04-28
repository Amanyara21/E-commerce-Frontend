import React from 'react'
import './Banner.css'
import exclusive_image from "../Assets/exclusive_image.png"

const Banner = ({banner}) => {
  return (
    <div className='banner'>
      <div className="banner-left">
        <h1>Flat 50% OFF</h1>
        <h2><span>12</span> Hours <span>20</span> Mins</h2>
        <button>Check Now</button>
      </div>
      <div className="banner-right">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner
