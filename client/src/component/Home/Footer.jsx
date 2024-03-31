// src/comopnents/Footer.js
import React from 'react';
import { FaFacebook,FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import {NavLink} from 'react-router-dom';
import "./Home.css"
const Footer = () => {
    return (
        <div className="alhilal-footer_color-css text-white ">
            <footer className="footer p-10 justify-items-center ">
                <div className='responsive'>
                    <span className="footer-title">Services</span>
                    <NavLink to="/aboutus" className="link link-hover">About us</NavLink>
                    <NavLink to="/contactus" className="link link-hover">Contact</NavLink>
                    <NavLink to="/gallery" className="link link-hover">Gallery</NavLink>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover logo" href="https://www.facebook.com/groups/ALHILALMISSON" target="_blank"><span className="logoC"><FaFacebook /></span>Facebook</a>
                    <a className="link link-hover logo" href="https://www.youtube.com/channel/UCDuC3dIoG18fCjIZ35AD0mg" target="_blank"><span className="logoC"><FaYoutube/></span>Youtube</a>
                    <a className="link link-hover logo"><span className="logoC"><BiLogoGmail /></span>alhilalmisson999@gmail.com</a>
                </div>
                <div>
                    <span className="footer-title">Head Office</span>
                    <p className="link link-hover">Kadambagachi, Duttapukur(Barasat),North 24 Parganas</p>
                    <p className="link link-hover">Kolkata -700125</p>
                    <p className="link link-hover">Mobile: 9732491636 / 9143005911 / 9325817306 / 7980008201 / 7003117687</p>
                </div>
               
            </footer>
            <div className="text-center footer-dedicated" style={{
                backgroundColor: '#01285E',
                height: '40px',
                color: 'white',
                fontSize: '14px',
                paddingTop: '10px'
            }}>
                <p>Copyright © 2024 - All right reserved by AHM</p>
            </div>
        </div>
    );
};
export default Footer;