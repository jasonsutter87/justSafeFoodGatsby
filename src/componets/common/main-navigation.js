import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function MainNavigation() {
  return (
    <div className="main-navigation">

        <nav className="d-flex  d-xl-none w-100">
            <div className="site-container-1340">
            <div className="row justify-content-between align-items-center mobile-nav-row d-xl-none">
                <div className="col-auto">
                    <Link to="/" >
                        <StaticImage
                            loading="eager"
                            src="../../images/assets/brand/JustSafeFood-logo.svg"
                            alt="Just Safe Food Logo"
                            className="header-logo"
                            />
                        <p className="sr-only">Just Safe Food</p>
                    </Link>
                </div>

                <div className="col-auto d-flex align-items-center">
                    <i className="far fa-times nav-btn-close d-none" aria-hidden="true" id="close-mobile-menu-btn"></i>
                    <i className="fas fa-bars nav-menu-toggle-btn nav-btn-open" aria-hidden="true" id="open-mobile-menu-btn"></i>
                </div>
                </div>
            </div>
        </nav> 

        <nav className="d-none d-xl-flex w-100 main-nav">
        <div className="site-container-1340">
            <div className="row">
            <div className="col">
            <Link to="/" >
                    <StaticImage
                    loading="eager"
                    src="../../images/assets/brand/JustSafeFood-logo.svg"
                    alt="Just Safe Food Logo"
                    className="header-logo"
                    />
                <p className="sr-only">Just Safe Food</p>
                </Link>
            </div>
            <div className="col-auto">
                <ul className="ul-reset d-flex justify-content-end align-items-center h-100">
                <li className="nav-menu-item">
                    <Link className="nav-link" to="/course-details">
                    Course Details
                    </Link>
                </li>

                <li className="nav-menu-item">
                    <Link className="nav-link" to="/faq">
                    FAQ
                    </Link>
                </li>

                <li className="nav-menu-item">
                    <Link className="nav-link" to="/contact">
                    Contact
                    </Link>
                </li>

                
                <li className="nav-menu-item">
                    <Link to="/start-now" className="btn-secondary btn-size-sm">Start Now</Link>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <Link to="#page-main-content" className="sr-only">Skip to main content</Link>
        </nav>
    </div>
  )
}
