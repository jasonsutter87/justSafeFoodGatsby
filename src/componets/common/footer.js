import React, { useEffect } from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import{siteMetadata} from '../../../gatsby-config'
import '../../js/site.js'; // Import your custom JavaScript file


export default function Footer() {
  useEffect(() => {
    // Your custom JavaScript code can be used here
    // For example, let's add an event listener to the document
    const handleDocumentClick = (event) => {
      // Handle the document click event here
    };

    // Add an event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); // The empty dependency array means this effect runs only once on mount



  return (
    
  <footer className="footer">
  <div className="site-container-1340">


    <div className="row d-none d-md-flex desktop-footer  justify-content-between align-items-center">
      <div className="col">
        <ul className="ul-reset d-flex">
          <li className="order-2 copywrite footer-link"><Link to="/terms">Terms of Use</Link></li>
          <li className="order-2 copywrite footer-link"><Link to="/privacy">Privacy Statement</Link></li>
          <li className="order-2 copywrite footer-link"><Link to="/accessibility">Accessibility</Link></li>
        </ul>
        <p className="copywrite mb-0">&copy; { siteMetadata.copywrite_date } Just.Safe.Food. | Powered by 
        <a className="bold mb-0" href="https://simplelearning.com" target="_blank" rel="noreferrer">Simple</a>&nbsp;
        <a className="bold mb-0" href="https://simplelearning.com" target="_blank" rel="noreferrer">
          <i className="far fa-external-link-square" aria-hidden="true"></i>
          <span className="sr-only">Simple</span>
        </a>
        </p>
      </div>
      <div className="col-auto">
        <Link to="https://onefairwage.site/" target="_blank" rel="noreferrer">
        <StaticImage
                    src="../../images/assets/footer/OFW-logo.png"
                    alt="Just Safe Food Logo"
                    className="footer-logo"
                    />
        </Link>
      </div>
    </div>

    <div className="row justify-content-between align-items-center   desktop-footer-alt">
      <div className="col-12 col-lg-auto order-2 order-lg-1 t-c-l mt-4 mt-lg-0">
        <p className="copywrite mb-0">&copy; {siteMetadata.copywrite_date } Just.Safe.Food. | Powered by <a className="bold mb-0" href="https://simplelearning.com" target="_blank" rel="noreferrer">Simple</a>&nbsp;
          <a className="bold mb-0" href="https://simplelearning.com" target="_blank" rel="noreferrer">
            <i className="far fa-external-link-square" aria-hidden="true"></i>
            <span className="sr-only">Simple</span>
          </a>
        </p>
      </div>
      <div className="col-12 col-lg d-flex justify-content-center justify-content-lg-end order-1 order-lg-2">
        <ul className="ul-reset d-flex align-items-center flex-column flex-lg-row">
          <li className="order-2 copywrite footer-link"><Link to="/terms">Terms of Use</Link></li>
          <li className="order-2 copywrite footer-link"><Link to="/privacy">Privacy Statement</Link></li>
          <li className="order-2 copywrite footer-link"><Link to="/accessibility">Accessibility</Link></li>

          <li className="order-1 order-lg-4 pt-3 pt-lg-0">
            <a href="https://onefairwage.site/" target="_blank" rel="noreferrer">
              <StaticImage
                    src="../../images/assets/footer/OFW-logo.png"
                    alt="Just Safe Food Logo"
                    className="footer-logo"
                    />
            </a>
            
          </li>
        </ul>
      </div>
    </div>

    </div>
   
</footer>

  )
}
