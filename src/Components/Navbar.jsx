// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <>
//       <div className='top-bar bg-primary p-2'>
//         <div className='rw'>
//           <div className='col-md-9 col-6'>
//             <div className='ms-5'>
//             <Link className='me-3' to="mailto:dakshchaudhary584@gmail.com"><i className='text dark fa fa-envelope'><span className='d-none d-md-inline'>dakshchaudhary584@gmail.com</span></i></Link>
//             <Link className='me-3' to="telto:+91 9927321111"><i className='text dark fa fa-phone'><span className='d-none d-md-inline'>+919927321111</span></i></Link><Link className='me-3' to="https://wa.me/+919927321111:dakshchaudhary584@gmail.com"><i className='text dark fa fa-whatsapp'><span className='d-none d-md-inline'></span>+919927321111</i></Link>
//             </div>
//           </div>
//           <div className='col-md-3 col-6'>
//            <div className='float-end me-'>
    
//              <Link className='me-3' to="#" target='_blank' rel='noreferrer'><i className="text-dark fa-brands fa-facebook "></i></Link>
//             <Link className='me-3' to="#" target='_blank' rel='noreferrer'><i className="text-dark fa-brands fa-instagram "></i></Link>
//             <Link className='me-3' to="#" target='_blank' rel='noreferrer'><i className="text-dark fa-brands fa-instagram "></i></Link>
//             <Link className='me-3' to="#" target='_blank' rel='noreferrer'><i className="text-dark fa-brands fa-linkedin"></i></Link>
//             <Link className='me-3' to="#" target='_blank' rel='noreferrer'><i className="text-dark fa-brands fa-youtube "></i></Link>
//            </div>
//           </div>

//         </div>

//       </div>
//       <header id="header" className="header d-flex align-items-center sticky-top">
//         <div className="container-fluid container-xl position-relative d-flex align-items-center">

//           <Link to="/" className="logo d-flex align-items-center me-auto">

           
//             <h1 className="sitename">{process.env.REACT_APP_SITE_NAME}</h1>
//           </Link>

//           <nav id="navmenu" className="navmenu">
//             <ul>
//               <li><NavLink to="/">Home<br /></NavLink></li>
//               <li><NavLink to="/about">About</NavLink></li>
//               <li><NavLink to="/shop">Shop</NavLink></li>
//               <li><NavLink to="/features">Features</NavLink></li>
//               <li><NavLink to="/testimonial">Testimonial</NavLink></li>
//               <li><NavLink to="ContactUs">ContactUs</NavLink></li>
              
//             </ul>
//             <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//           </nav>

//           <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

//         </div>
//       </header>
//     </>
//   )
// }


import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='top-bar p-2'>
                <div className="row">
                    <div className="col-md-9 col-6">
                        <div className='ms-5'>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`mailto:${process.env.REACT_APP_EMAIL}`}><i className='text-light fa fa-envelope'> <span className='d-none d-md-inline'>{process.env.REACT_APP_EMAIL}</span></i></Link>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`tel:${process.env.REACT_APP_PHONE}`}><i className='text-light fa fa-phone'> <span className='d-none d-md-inline'>{process.env.REACT_APP_PHONE}</span></i></Link>
                            <Link className='me-4' target='_blank' rel="noreferrer" to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`}><i className='text-light fa fa-whatsapp'> <span className='d-none d-md-inline'>{process.env.REACT_APP_WHATSAPP}</span></i></Link>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-6">
                        <div className='float-end me-5'>
                            <Link className="me-3" to={`${process.env.REACT_APP_FACEBOOK}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-facebook'></i></Link>
                            <Link className="me-3" to={`${process.env.REACT_APP_INSTAGRAM}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-instagram'></i></Link>
                            <Link className="me-3" to={`${process.env.REACT_APP_LINKEDIN}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-linkedin'></i></Link>
                            <Link className="me-3" to={`${process.env.REACT_APP_TWITTER}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-twitter-x'></i></Link>
                            <Link className="me-3" to={`${process.env.REACT_APP_YOUTUBE}`} target='_blank' rel='noreferrer'><i className='text-light bi bi-youtube'></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header" className="header bg-primary d-flex align-items-center sticky-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <Link to="/" className="logo d-flex align-items-center me-auto">
                        {/* <img src="assets/img/logo.png" alt=""/> */}
                        <h1 className="sitename text-light">{process.env.REACT_APP_SITE_NAME}</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu text-light">
                        <ul>
                            <li><NavLink to="/">Home<br /></NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/features">Features</NavLink></li>
                            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                            <li><NavLink to="/contactus">ContactUs</NavLink></li>
                            <li><NavLink to="/admin">Admin</NavLink></li>


                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                    <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>
                </div>
            </header>
        </>
    )
}
