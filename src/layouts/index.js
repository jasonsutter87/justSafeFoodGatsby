import React from 'react'
import MainNavigation from '../componets/common/main-navigation'
import Footer from '../componets/common/footer'

import HeaderBanner from '../componets/common/header-banner'
import Cta from '../componets/common/cta'
import { Helmet } from 'react-helmet'

import "../styles/site.scss"; 
import { siteMetadata } from '../../gatsby-config'


export default function Layout({ children}) {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ siteMetadata.title }</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />


        

            <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"></script>

            <link href="
            https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css
            " rel="stylesheet" />

            <script src="https://kit.fontawesome.com/909a03d84e.js" crossorigin="anonymous"></script>
        </Helmet>

        <div id="main-container">
            <main>
                <HeaderBanner /> 
                <MainNavigation />
                { children }
                <Cta /> 
            </main>
            <Footer />   
        </div>
    </>
  )
}
