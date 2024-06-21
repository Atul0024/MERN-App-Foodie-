import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Crousal from '../components/Crousal'



export default function Homepage() {
    return (
        <div>
            <div><Navbar /></div>
            <div className='mt-5'><Crousal/></div>
            <div><Card/></div>
           
            <div><Footer /></div>
        </div>
    )
}
