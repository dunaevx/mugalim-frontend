import React from 'react'

import './logo.css'
import biglogo from '../../assets/bigLogo.svg'


function Logo() {
    return (
      <div className='block1'>
        <img alt='big-logo'  src={biglogo}></img>
      </div>
  )
}

export default Logo