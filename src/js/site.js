import { useEffect } from 'react';

const Site = () => {
  useEffect(() => {
    // This code will run on the client side after the initial render.
    import('jquery').then(($) => {
      console.log("jQuery is working !!");

      $('#open-mobile-menu-btn').click( e => {
          e.preventDefault();
          $('body').toggleClass('mobile-nav-active');
    
          $('#close-mobile-menu-btn').removeClass('d-none');
          $('#open-mobile-menu-btn').addClass('d-none');
      });

      $('#close-mobile-menu-btn').click( e => {
          e.preventDefault();
          $('body').toggleClass('mobile-nav-active');
    
          $('#close-mobile-menu-btn').addClass('d-none');
          $('#open-mobile-menu-btn').removeClass('d-none');
      });
    });
  }, []);

 
};

export default Site;
