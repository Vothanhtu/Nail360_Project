import React, { Component } from 'react'
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
         <footer className='footer'>
      <div className="footer-container">
        <div className="footer-row">
          <div className="col-md-3">
            
            <ul>
            <li><h4>Quick Links</h4></li>
              <li>About</li>
              <li>Services</li>
              <li>Salon Owner</li>
            </ul>
          </div>

          <div className="col-md-3">
            
            <ul>
                <li><h4>Infomation</h4></li>
              <li>Testimonial</li>
              <li>Contact Us</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="col-md-3">
            
            <ul>
                <li><h4>nail360</h4></li>
              <li>Term and Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="col-md-3">
            
            <ul>
                <li><h4>Contact Us</h4></li>
              <li>1234 Litle Melbourne</li>
              <li>Phone: 123-456</li>
              <li>Email: thanhtu@gmail.com</li>
            </ul>
          </div>
          </div>
          </div>
          <div className='footer-icon '>
            <p>Copyright © 2023 nail360.com. All rights reserved.</p>
            <img alt='contact icon ' src='icon-footer.svg'></img>
          </div>
    </footer>
    )
  }
}
