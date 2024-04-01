import React from 'react'
import { Link } from 'react-router-dom'
// import LoginPage from './LoginPage'

import Login from '../components/login/Login.jsx'

const Home = () => {
  return (
    <>
    <body >
    {/* <div> */}
      {/* <Link to= "/" >
      Home
      </Link>
    </div>

<Link to= "/admin/dashboard">
  Go to dashboard
</Link>
<Link to="/pages/Investors"> investors</Link>
      <Link to="/pages/Investorpage"> Investorpage</Link> */}
<section >
  <div>
    <Login />
  </div>
</section>
</body>
</>
  )
}

export default Home