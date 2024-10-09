import React from 'react'
import Navbar from '../component/Navbar'
import Footor from '../component/Footor'
import Ebook from '../component/Ebook'

function Ebooks() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'><Ebook></Ebook></div>
    <Footor></Footor>
    </>
  )
}

export default Ebooks
