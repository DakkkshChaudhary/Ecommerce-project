import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Breadcrum from '../../../Components/Breadcrum'
import Sidebar from '../Sidebar'

export default function AdminMaincategory() {
  let [MaincategoryStateData, setMaincategoryStateData] = useState([])

  async function deleteRecord(id) {
    if (window.confirm("Are you sure to delete the item:")) {
      let response = await fetch(process.env.REACT_APP_BACKEND_SERVER + "maincategory/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      });
      response = await response.json()
      // setMaincategoryStateData(response);
      if (Array.isArray(response)) {
        setMaincategoryStateData(response);
      }
      getAPIData();
    }
  }

  async function getAPIData() {
    let response = await fetch(process.env.REACT_APP_BACKEND_SERVER + "maincategory", {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    });
    response = await response.json()
    // setMaincategoryStateData(response)
    setMaincategoryStateData(Array.isArray(response) ? response : response.data || []);
  }
  useEffect(() => {
    getAPIData()
  }, [])
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

            <div className="table-responsive">
              <table className='table table-bordered table-striped table-hover'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pic</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    MaincategoryStateData.map(item => {
                      return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <Link to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} target='_blank'>
                            <img src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} height={80} width={80} alt="no image found" />
                          </Link>
                        </td>
                        <td>Active</td>
                        <td><Link to={`/admin/maincategory/update${item.id}`} className='btn btn-primary'><span className="material-symbols-outlined fs-5">
                          edit_square
                        </span></Link></td>
                        <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><span className="material-symbols-outlined fs-5">delete</span></button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
