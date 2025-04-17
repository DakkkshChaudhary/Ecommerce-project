import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrum from '../../../Components/Breadcrum'
import Sidebar from '../Sidebar'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'


export default function AdminCreateMaincategory() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true
  })

  let [errorMessage, setErrorMessage] = useState({
    name: "Name Feild is Mandatory",
    pic: "Pic Feild is Mandatory"
  })

  let [show, setShow] = useState(false)
  let navigate = useNavigate()

  function getInputData(e) {
    var name = e.target.name
    var value = e.target.files && e.target.files.length ? "/brand/" + e.target.files[0].name : e.target.value

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? ImageValidator(e) : FormValidator(e)
      }
    }
    )
    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value
      }
    }
    )
  }

  async function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error)
      setShow(true)
    else {
      let response = await fetch("http://localhost:8000/maincategory",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          name:data.name,
          pic:data.pic,
          active:data.active,
        })
      })
      response = await response.json()
      navigate("/admin/maincategory")

    }
  }
  return (
    <>
      <Breadcrum title="Admin" />
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>

            <h5 className='bg-primary text-light text-center w-100 p-2'>MainCategory <Link to="admin/maincategory"></Link><i className='fa fa-long-arrow-left text-light float-end'></i></h5>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" name="name" onChange={getInputData} placeholder='Maincategory Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Pic*</label>
                  <input type="file" name="pic" onChange={getInputData} className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                  {show && errorMessage.pic ? <p className='text-danger'>{errorMessage.pic}</p> : null}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select name="active" onChange={getInputData} className='form-select border-3 border-primary'>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type='submit' className='btn btn-primary w-100'>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
