import React from 'react'                  //importing react library      
import { Link } from 'react-router-dom'     // importing components
import image from './home.png'              //importing image 

const Navbar = () => {                      //creating a Navbar component
    return (
        <nav className='navbar navbar-expand-lg navbar-dark py-2'>
            <Link to='/' className=' nav-head ml-5'>Contact List App 
            <img src={image} alt="home-page" />
            </Link>
        </nav >
    )
}

export default Navbar   //export navbar component