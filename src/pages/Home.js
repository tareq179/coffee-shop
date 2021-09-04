import React from 'react'
import About from '../Component/About/About';
import Blogs from '../Component/Blogs/Blogs';
import Contact from '../Component/Contact/Contact';
import Hero from '../Component/Hero/Hero';
import Menu from '../Component/Menu/Menu';
import Review from '../Component/Review/Review';
import Product from '../Component/Product/Product';

function Home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Menu/>
            <Product/>
            <Review/>
            <Contact/>
            <Blogs/>
        </div>
    )
}

export default Home
