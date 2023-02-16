import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ante ac velit fermentum tempus sed nec leo.</p>
          </div>
          <div className="footer__item">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Main St</li>
              <li>Los Angeles, CA 90012</li>
              <li>(123) 456-7890</li>
              <li>info@example.com</li>
            </ul>
          </div>
          <div className="footer__item">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2023 WebSCByDinko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
