// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";

// import HomePage from './Pages/HomePage'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import AboutPage from './Pages/AboutPage';
// import ShopPage from './Pages/ShopPage';
// import FeaturesPage from './Pages/FeaturesPage';
// import TestimonialPage from './Pages/TestimonialPage';
// // import About from './Components/About';

// export default function App() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Navbar />
//                 <Routes>
//                     <Route path='' element={<HomePage />} />
//                     <Route path='/about' element={<AboutPage />} />
//                     <Route path='/Shop' element={<ShopPage />} />
//                     <Route path='/Features' element={<FeaturesPage/>} />
//                     <Route path='/Testimonial' element={<TestimonialPage/>} />
//                 </Routes>
//                 <Footer />
//             </BrowserRouter>
//         </>
//     )
// }



import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'
import FeaturesPage from './Pages/FeaturesPage'
import TestimonialPage from './Pages/TestimonialPage'
import ContactUsPage from './Pages/ContactUsPage'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/features' element={<FeaturesPage />} />
                <Route path='/testimonials' element={<TestimonialPage />} />
                <Route path='/contactus' element={<ContactUsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
