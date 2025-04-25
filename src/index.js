// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "bootstrap/dist/js/bootstrap.bundle.min";


// // import Navbar from './Components/Navbar'
// // import Footer from './Components/Footer'
// // import About from './Components/About';

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//     <>
//        <App/>
//     </>
// )




import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'

import Store from './Redux/Store'
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
       <Provider store={Store}>
       <App/>
       </Provider>
    </>
)
