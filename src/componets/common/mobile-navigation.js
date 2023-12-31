import React from 'react'
import { Link } from 'gatsby'

export default function MobileNavigation() {
  return (
    <div id="mobile-nav" className="mobile-nav">
        <div className="container  pb-5">
        <div className="row">
            <div className="col-12 align-items-center justify-content-center px-0">
            <ul className="ul-reset mobile-ul mobile-nav-products-title">
                <li className="mobile-nav-menu-item">
                    <Link className="d-flex justify-content-between submenu-link w-100 py-3 align-items-center mobile-menu-courses-link"   to="/course-details">
                    <div className="d-flex align-items-center">
                        <span className="mobile-nav-menu-page">
                        Course Details
                        </span>
                    </div>
                    <span className="mobile-nav-triangle d-none">
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    </Link>
                </li>
    
                <li className="mobile-nav-menu-item">
                <Link  className="d-flex justify-content-between submenu-link w-100 py-3 align-items-center mobile-menu-resources-link"  to="/faq">
                    <div className="d-flex align-items-center">
                    <span className="mobile-nav-menu-page">
                        FAQ
                    </span>
                    </div>
                    <span className="mobile-nav-triangle d-none">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </span>
                </Link>
                </li>
    
                <li className="mobile-nav-menu-item">
                <Link className="d-flex justify-content-between submenu-link w-100 py-3 align-items-center"  to="/contact">
                    <div className="d-flex align-items-center">
                    <span className="mobile-nav-menu-page">
                        Contact
                    </span>
                    </div>
                    <span className="mobile-nav-triangle d-none">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </span>
                </Link>
                </li>
    
                <li style={{ padding: '0 20px' }} className="mobile-nav-menu-item menu-border-bottom ">
            
                <div className="py-3">
                    <a href="https://justsafefood.com/my-account/" target="_blank" className="btn-light btn-size-sm d-none" rel="noreferrer">Login</a>
                </div>
                </li>
    
                <li style={{ padding: '0 20px' }}>
                    <div className="py-3">
                        <Link to="/start-now"  className="btn-secondary btn-size-sm">Start Now</Link>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div> 
  )
}
