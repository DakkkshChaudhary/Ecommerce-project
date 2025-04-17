import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Breadcrum from '../../../Components/Breadcrum'
import Sidebar from '../Sidebar'

export default function AdminMaincategory() {
  let[MaincategoryStateData,setMaincategoryStateData]= useState([])
  useEffect(()=>{
    (async()=>{
      let response = await fetch("http://localhost:8000/maincategory",{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })
        response = await response.json()
    })()
  },[])
  return (
    <>
      <Breadcrum title="Admin" />
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <h5 className='bg-primary text-light text-center w-100 p-2'>
              MainCategory
              <Link to="/admin/maincategory/create" className="float-end text-light">
                <i className="fa fa-plus"></i>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
