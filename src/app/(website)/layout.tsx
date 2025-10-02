import React from 'react'
import LandingPageNavBar from './_components/navbar'
import HomePage from './_components/hero'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex flex-col px-10 xl:px-0 container'>
        <LandingPageNavBar/>
        <HomePage/>
        
        {children}
    </div>
  )
}

export default layout