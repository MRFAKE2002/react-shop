// libraries
import React from 'react'

interface IContainer {
  children: React.ReactNode
}

function Container({children}: IContainer) {
  return (
    /*
      ma in component ro sakhtim baraye zamani ke mikhaim az chap va rast fasele bedim va inke dige baghie tag ha be surat children
      dakhel in component mian.
      dar inja 'mx-auto' yani az chap va rast be surat automat biad vasat.
    */
    <div className="container mx-auto">
      {children}
    </div>
  )
}

export default Container
