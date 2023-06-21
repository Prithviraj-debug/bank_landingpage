import React from 'react'
import styles from './style'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Stats, Testimonials, Navbar, Hero } from './components'


const App = () => (
  <div className='bg-primary overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} container m-auto`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} container m-auto`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}  container m-auto`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App