import React from 'react'
import phoneImg from '../images/phone.svg'
import { AppContextProvider, useGlobalContext } from '../context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Payment infrastruceture for the internet</h1>
        <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <button className='btn'>Start now</button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} alt='phone' className='phone-img'></img>
      </article>
    </div>
  </section>
}

export default Hero
