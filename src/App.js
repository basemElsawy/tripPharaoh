import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/searchSection/Home'
import Packages from './components/packagesSection/packages'
import Giza from './components/GizaSection/Giza'
import Cairo from './components/cairoSection/Cairo'
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home className='home-sect' />
        <Packages />
        <Giza />
        <Cairo />
      </main>
    </>
  )
}

export default App

