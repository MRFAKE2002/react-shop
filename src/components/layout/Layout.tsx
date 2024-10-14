// libraries
import React from 'react'

// components
import Navbar from '../navbar/Navbar'

interface ILayout {
  children: React.ReactNode
}

function Layout({children} : ILayout) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
