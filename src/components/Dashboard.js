import React from 'react'

const Dashboard = () => {
  return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <div className="home-tab">
                        <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences" role="tab" aria-selected="false">Audiences</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#demographics" role="tab" aria-selected="false">Demographics</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more" role="tab" aria-selected="false">More</a>
                                </li>
                            </ul>
                            <div>
                                <div className="btn-wrapper">
                                <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                                <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                                <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download"></i> Export</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content tab-content-basic">
                            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="statistics-details d-flex align-items-center justify-content-between">
                                        <div>
                                            <p className="statistics-title">Bounce Rate</p>
                                            <h3 className="rate-percentage">32.53%</h3>
                                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>-0.5%</span></p>
                                        </div>
                                        <div>
                                            <p className="statistics-title">Page Views</p>
                                            <h3 className="rate-percentage">7,682</h3>
                                            <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                                        </div>
                                        <div>
                                            <p className="statistics-title">New Sessions</p>
                                            <h3 className="rate-percentage">68.8</h3>
                                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p className="statistics-title">Avg. Time on Site</p>
                                            <h3 className="rate-percentage">2m:35s</h3>
                                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p className="statistics-title">New Sessions</p>
                                            <h3 className="rate-percentage">68.8</h3>
                                            <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <p className="statistics-title">Avg. Time on Site</p>
                                            <h3 className="rate-percentage">2m:35s</h3>
                                            <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 d-flex flex-column">
                                        <div className="row flex-grow">
                                            <div className="col-12 grid-margin stretch-card">
                                                <div className="card card-rounded">
                                                <div className="card-body">
                                                    <div className="d-sm-flex justify-content-between align-items-start">
                                                    <div>
                                                        <h4 className="card-title card-title-dash">Market Overview</h4>
                                                        <p className="card-subtitle card-subtitle-dash">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown">
                                                        <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> This month </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                            <h6 className="dropdown-header">Settings</h6>
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="#">Separated link</a>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                                    <div className="d-sm-flex align-items-center mt-4 justify-content-between">
                                                        <h2 className="me-2 fw-bold">$36,2531.00</h2>
                                                        <h4 className="me-2">USD</h4>
                                                        <h4 className="text-success">(+1.37%)</h4>
                                                    </div>
                                                    <div className="me-3">
                                                        <div id="marketingOverview-legend"></div>
                                                    </div>
                                                    </div>
                                                    <div className="chartjs-bar-wrapper mt-3">
                                                    <canvas id="marketingOverview"></canvas>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row flex-grow">
                                            <div className="col-12 grid-margin stretch-card">
                                                <div className="card card-rounded">
                                                <div className="card-body">
                                                    <div className="d-sm-flex justify-content-between align-items-start">
                                                    <div>
                                                        <h4 className="card-title card-title-dash">Pending Requests</h4>
                                                        <p className="card-subtitle card-subtitle-dash">You have 50+ new requests</p>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i className="mdi mdi-account-plus"></i>Add new member</button>
                                                    </div>
                                                    </div>
                                                    <div className="table-responsive  mt-1">
                                                    <table className="table select-table">
                                                        <thead>
                                                        <tr>
                                                            <th>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" id="check-all" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </th>
                                                            <th>Customer</th>
                                                            <th>Company</th>
                                                            <th>Progress</th>
                                                            <th>Status</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="d-flex ">
                                                                <img src="assets/images/faces/face1.jpg" alt="" />
                                                                <div>
                                                                <h6>Brandon Washington</h6>
                                                                <p>Head admin</p>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <h6>Company name 1</h6>
                                                            <p>company type</p>
                                                            </td>
                                                            <td>
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                <p className="text-success">79%</p>
                                                                <p>85/162</p>
                                                                </div>
                                                                <div className="progress progress-md">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="badge badge-opacity-warning">In progress</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="d-flex">
                                                                <img src="assets/images/faces/face2.jpg" alt="" />
                                                                <div>
                                                                <h6>Laura Brooks</h6>
                                                                <p>Head admin</p>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <h6>Company name 1</h6>
                                                            <p>company type</p>
                                                            </td>
                                                            <td>
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                <p className="text-success">65%</p>
                                                                <p>85/162</p>
                                                                </div>
                                                                <div className="progress progress-md">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '65%' }}aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="badge badge-opacity-warning">In progress</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="d-flex">
                                                                <img src="assets/images/faces/face3.jpg" alt="" />
                                                                <div>
                                                                <h6>Wayne Murphy</h6>
                                                                <p>Head admin</p>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <h6>Company name 1</h6>
                                                            <p>company type</p>
                                                            </td>
                                                            <td>
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                <p className="text-success">65%</p>
                                                                <p>85/162</p>
                                                                </div>
                                                                <div className="progress progress-md">
                                                                <div className="progress-bar bg-warning" role="progressbar" style= {{ width: '38%' }} aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="badge badge-opacity-warning">In progress</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="d-flex">
                                                                <img src="assets/images/faces/face4.jpg" alt="" />
                                                                <div>
                                                                <h6>Matthew Bailey</h6>
                                                                <p>Head admin</p>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <h6>Company name 1</h6>
                                                            <p>company type</p>
                                                            </td>
                                                            <td>
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                <p className="text-success">65%</p>
                                                                <p>85/162</p>
                                                                </div>
                                                                <div className="progress progress-md">
                                                                <div className="progress-bar bg-danger" role="progressbar" style= {{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="badge badge-opacity-danger">Pending</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <div className="form-check form-check-flat mt-0">
                                                                <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" aria-checked="false" /><i className="input-helper"></i></label>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="d-flex">
                                                                <img src="assets/images/faces/face5.jpg" alt="" />
                                                                <div>
                                                                <h6>Katherine Butler</h6>
                                                                <p>Head admin</p>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <h6>Company name 1</h6>
                                                            <p>company type</p>
                                                            </td>
                                                            <td>
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                                <p className="text-success">65%</p>
                                                                <p>85/162</p>
                                                                </div>
                                                                <div className="progress progress-md">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{ width:'65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td>
                                                            <div className="badge badge-opacity-success">Completed</div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-flex flex-column">
                                        <div className="row flex-grow">
                                            <div className="col-12 grid-margin stretch-card">
                                                <div className="card card-rounded">
                                                <div className="card-body">
                                                    <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                        <h4 className="card-title card-title-dash">Todo list</h4>
                                                        <div className="add-items d-flex mb-0">
                                                            {/* <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"> */}
                                                            <button className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p"><i className="mdi mdi-plus"></i></button>
                                                        </div>
                                                        </div>
                                                        <div className="list-wrapper">
                                                        <ul className="todo-list todo-list-rounded">
                                                            <li className="d-block">
                                                            <div className="form-check w-100">
                                                                <label className="form-check-label">
                                                                <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                                                </label>
                                                                <div className="d-flex mt-2">
                                                                <div className="ps-4 text-small me-3">24 June 2020</div>
                                                                <div className="badge badge-opacity-warning me-3">Due tomorrow</div>
                                                                <i className="mdi mdi-flag ms-2 flag-color"></i>
                                                                </div>
                                                            </div>
                                                            </li>
                                                            <li className="d-block">
                                                            <div className="form-check w-100">
                                                                <label className="form-check-label">
                                                                <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                                                </label>
                                                                <div className="d-flex mt-2">
                                                                <div className="ps-4 text-small me-3">23 June 2020</div>
                                                                <div className="badge badge-opacity-success me-3">Done</div>
                                                                </div>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <div className="form-check w-100">
                                                                <label className="form-check-label">
                                                                <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                                                </label>
                                                                <div className="d-flex mt-2">
                                                                <div className="ps-4 text-small me-3">24 June 2020</div>
                                                                <div className="badge badge-opacity-success me-3">Done</div>
                                                                </div>
                                                            </div>
                                                            </li>
                                                            <li className="border-bottom-0">
                                                            <div className="form-check w-100">
                                                                <label className="form-check-label">
                                                                <input className="checkbox" type="checkbox" /> Lorem Ipsum is simply dummy text of the printing <i className="input-helper rounded"></i>
                                                                </label>
                                                                <div className="d-flex mt-2">
                                                                <div className="ps-4 text-small me-3">24 June 2020</div>
                                                                <div className="badge badge-opacity-danger me-3">Expired</div>
                                                                </div>
                                                            </div>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row flex-grow">
                                            <div className="col-12 grid-margin stretch-card">
                                                <div className="card card-rounded">
                                                <div className="card-body">
                                                    <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h4 className="card-title card-title-dash">Type By Amount</h4>
                                                        </div>
                                                        <div>
                                                        <canvas className="my-auto" id="doughnutChart"></canvas>
                                                        </div>
                                                        <div id="doughnutChart-legend" className="mt-5 text-center"></div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row flex-grow">
                                            <div className="col-12 grid-margin stretch-card">
                                                <div className="card card-rounded">
                                                    <div className="card-body">
                                                        <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <div>
                                                                <h4 className="card-title card-title-dash">Leave Report</h4>
                                                            </div>
                                                            <div>
                                                                <div className="dropdown">
                                                                <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Month Wise </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                                                    <h6 className="dropdown-header">week Wise</h6>
                                                                    <a className="dropdown-item" href="#">Year Wise</a>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="mt-3">
                                                            <canvas id="leaveReport"></canvas>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row flex-grow">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dashboard
