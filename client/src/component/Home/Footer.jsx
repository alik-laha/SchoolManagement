// src/comopnents/Footer.js
import React from 'react';
const Footer = () => {
    return (
        <div className="alhilal-footer_color-css text-white">
            <footer className="footer p-10 justify-items-center">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Developing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className="text-center" style={{backgroundColor:'#01285E',height:'40px',color:'white',fontSize:'14px',paddingTop:'10px'}}>
                <p>Copyright © 2022 - All right reserved by AL-HILAL Mission</p>
            </div>
        </div>
    );
};
export default Footer;