import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Breadcrum from '../../../Components/Breadcrum'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

import { getBrand, deleteBrand } from "../../../Redux/ActionCreators/BrandActionCreators"
export default function AdminBrand() {
    let dispatch = useDispatch()
    let BrandStateData = useSelector(state => state.BrandStateData)

    function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete That Item : ")) {
            dispatch(deleteBrand({ id: id }))
            getAPIData()
        }
    }

    function getAPIData() {
        dispatch(getBrand())
        if (BrandStateData.length) {
            var time = setTimeout(() => {
                $('#myTable').DataTable()
            }, 300)
            return time
        }
    }
    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [BrandStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary w-100 p-2 text-light text-center'>Brand <Link to="/admin/brand/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table id="myTable" className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        BrandStateData.map(item => {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <Link to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} target='_blank'>
                                                        <img src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} height={80} width={80} alt="" />
                                                    </Link>
                                                </td>
                                                <td>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/brand/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                                                <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
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
