// import React from 'react'
// import { Link, Links } from 'react-router-dom'

// export default function Breadcrum({ title }) {
//     return (
//         <>
//             <section id="hero" className="bg-primary">
//             <div className="container">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
//                     <li className="breadcrumb-item text-light" aria-current="page">{title}</li>
//                 </ol>
//             </div>
//             </section>
//         </>
//     )
// }



import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrum({ title }) {
    return (
        <>
            <section id="hero" className="breadcrumb-container bg-dark-subtle" >
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className='.text-primary'>Home</Link></li>
                        <li className="breadcrumb-item text-primary" aria-current="page">{title}</li>
                    </ol>
                </div>
            </section>
        </>
    )
}
