import React from 'react'
import cdf from '../images/cdf.png';

function Home() {
  return (
    <div>
      <h1>Welcome To NG-CDF Bursary App</h1>
      <img className='rotate' src={cdf} alt="logo" />
      <div>
        <h2>This app is dsigned to help in CDF bursary management </h2>
      </div>
      </div>
  )
}

export default Home;