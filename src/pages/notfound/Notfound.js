import React from 'react'

import './Notfound.css'
import icon404 from '../../assets/icon404.svg'

function Notfound() {
  return (
    <div className='notfound'>
      <div className='notfound__content'>
        <img alt="icon404" src={icon404} />
        <h1>404</h1>
        <p>Ой, что-то пошло не так...</p>
      </div>
    </div>
  )
}

export default Notfound