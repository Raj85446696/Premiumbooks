import React from 'react'
import Home from './home/home'
import { Route, Routes } from "react-router-dom"
import Ebooks from './ebook/Ebooks'
import About from './about/About'
import Contact from './contact/Contact'
import Signup from './component/Signup'

function App() {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/ebook' element={<Ebooks/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
   </div>
   </>
  )
}

export default App

