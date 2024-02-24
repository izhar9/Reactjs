import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />   {/* Outlet yaha bhi use karenge waha ka component change hota rahega 
                    ex. Header and Footer same rahega aur Outlet ke jagah par dusra component change kar sakte hai(jaise Header aur footer same
                    chahiye aur bich me home ya about us page  ya koi dusra aur page daal sakte hai.) 
                    Outlet use karne par hume index file(is page ke liye hum main.jsx ka use kar rahe hai) me jaa kar batana padega ki hum ek Layout use kar rahe hai aur uske ander baki sab render kar rahe hai 
                    isme ractRouter DOm ki taraf se nesting ki jaa sakte hai.*/}
    <Footer />
    </>
  )
}

export default Layout
