import React from 'react'

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="../index.html">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">
                        Dashboard
                    </span>
                </a>
            </li>
            <li className="nav-item nav-category">
                UI Elements
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="menu-icon mdi mdi-floor-plan"></i>
                    <span className="menu-title">
                        UI Elements
                    </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/ui-features/buttons.html">
                                Buttons
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/ui-features/dropdowns.html">
                                Dropdowns
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/ui-features/typography.html">
                                Typography
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                    <i className="menu-icon mdi mdi-card-text-outline"></i>
                    <span className="menu-title">
                        Form elements
                    </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                            <a className="nav-link" href="../pages/forms/basic_elements.html">
                                Basic Elements
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                    <i className="menu-icon mdi mdi-chart-line"></i>
                    <span className="menu-title">
                        Charts
                    </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/charts/chartjs.html">
                                ChartJs
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                    <i className="menu-icon mdi mdi-table"></i>
                        <span className="menu-title">
                            Tables
                        </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/tables/basic-table.html">
                                Basic table
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                    <i className="menu-icon mdi mdi-layers-outline"></i>
                        <span className="menu-title">
                            Icons
                        </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/icons/font-awesome.html">
                                Font Awesome
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <i className="menu-icon mdi mdi-account-circle-outline"></i>
                        <span className="menu-title">
                            User Pages
                        </span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/samples/blank-page.html"> 
                                Blank Page 
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/samples/error-404.html"> 
                                404 
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/samples/error-500.html"> 
                                500 
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/samples/login.html"> 
                                Login 
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="../pages/samples/register.html"> 
                                Register 
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../docs/documentation.html">
                    <i className="menu-icon mdi mdi-file-document"></i>
                    <span className="menu-title">
                        Documentation
                    </span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar
