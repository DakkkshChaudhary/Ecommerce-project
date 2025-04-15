import React from 'react'

export default function Profile({title}) {
  return (
    <>
    <h5 className='bg-primary text-center p-2 text-light'>{title}</h5>
    <div className='row'>
        <div className='col-md-6 mb-3'>
            <img src="/assets/img/no user.png" className='w-100' height={435} alt="" />
        </div>
        <div className='col-md-6 mb-3'>
            <table className='table table-bordered table-striped table-hover'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>Daksh Chaudhary</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>Daksh</td>
                    </tr>
                    <tr>
                        <th>email address</th>
                        <td>Daksh@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>+91-9927321111</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <th>Super Admin</th>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            {/* <Link to="update-profile" className="btn btn-primary w-100" >update</Link> */}
                            <a href="update-profile" className="btn btn-primary w-100" >update</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}
