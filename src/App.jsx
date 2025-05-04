// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import HomePage from './Pages/HomePage'
// import AboutPage from './Pages/AboutPage'
// import ShopPage from './Pages/ShopPage'
// import FeaturesPage from './Pages/FeaturesPage'
// import TestimonialPage from './Pages/TestimonialPage'
// import ContactUsPage from './Pages/ContactUsPage'
// import AdminHome from './Pages/Admin/AdminHome'
// import AdminMaincategory from './Pages/Admin/Maincategory/AdminMaincategory'
// import AdminCreateMaincategory from './Pages/Admin/Maincategory/AdminCreateMaincategory'
// import AdminUpdateMaincategory from './Pages/Admin/Maincategory/AdminUpdateMaincategory'

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Navbar />
//             <Routes>
//                 <Route path='' element={<HomePage />} />
//                 <Route path='/about' element={<AboutPage />} />
//                 <Route path='/shop' element={<ShopPage />} />
//                 <Route path='/features' element={<FeaturesPage />} />
//                 <Route path='/testimonials' element={<TestimonialPage />} />
//                 <Route path='/contactus' element={<ContactUsPage />} />


//                 {/* Admin routes */}
//                 <Route path='/admin' element={<AdminHome />} />
//                 <Route path='/admin/maincategory' element={<AdminMaincategory/>} />
//                 <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory />} />
//                 <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory />} />
                


//             </Routes>
//             <Footer />
//         </BrowserRouter>
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

import AdminHome from './Pages/Admin/AdminHome'

import AdminMaincategory from './Pages/Admin/Maincategory/AdminMaincategory'
import AdminCreateMaincategory from './Pages/Admin/Maincategory/AdminCreateMaincategory'
import AdminUpdateMaincategory from './Pages/Admin/Maincategory/AdminUpdateMaincategory'

import AdminSubcategory from './Pages/Admin/Subcategory/AdminSubcategory'
import AdminCreateSubcategory from './Pages/Admin/Subcategory/AdminCreateSubcategory'
import AdminUpdateSubcategory from './Pages/Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrand from './Pages/Admin/Brand/AdminBrand'
import AdminCreateBrand from './Pages/Admin/Brand/AdminCreateBrand'
import AdminUpdateBrand from './Pages/Admin/Brand/AdminUpdateBrand'


import AdminTestimonial from './Pages/Admin/Testimonial/AdminTestimonial'
import AdminCreateTestimonial from './Pages/Admin/Testimonial/AdminCreateTestimonial'
import AdminUpdateTestimonial from './Pages/Admin/Testimonial/AdminUpdateTestimonial'


import AdminProduct from './Pages/Admin/Product/AdminProduct'
import AdminCreateProduct from './Pages/Admin/Product/AdminCreateProduct'
import AdminUpdateProduct from './Pages/Admin/Product/AdminUpdateProduct'
import ProductPage from './Pages/ProductPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'

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
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                
                {/* Buyer Routes */}
                <Route path='/profile' element={<ProfilePage />} />


                {/* Admin Routes */}
                <Route path='/admin' element={<AdminHome />} />

                <Route path='/admin/maincategory' element={<AdminMaincategory />} />
                <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory />} />
                <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory />} />

                <Route path='/admin/subcategory' element={<AdminSubcategory />} />
                <Route path='/admin/subcategory/create' element={<AdminCreateSubcategory />} />
                <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategory />} />

                <Route path='/admin/brand' element={<AdminBrand />} />
                <Route path='/admin/brand/create' element={<AdminCreateBrand />} />
                <Route path='/admin/brand/update/:id' element={<AdminUpdateBrand />} />

                <Route path='/admin/testimonial' element={<AdminTestimonial />} />
                <Route path='/admin/testimonial/create' element={<AdminCreateTestimonial />} />
                <Route path='/admin/testimonial/update/:id' element={<AdminUpdateTestimonial />} />

                <Route path='/admin/product' element={<AdminProduct />} />
                <Route path='/admin/product/create' element={<AdminCreateProduct />} />
                <Route path='/admin/product/update/:id' element={<AdminUpdateProduct />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
