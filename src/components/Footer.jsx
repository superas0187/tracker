import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';
// import { BottomNavigation, BottomNavigationAction  } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column */}
                        <div className=" col-md-3 col-sm-6">
                            <h4 className="text-2xl my-2">Side Projects</h4>
                            <ul className="space list-unstyled">
                                <li><a href="/">Writing Prompt Generator</a></li>
                                <li><a href="/">Short Story Award</a></li>
                                <li><a href="/">API.mastery</a></li>
                            </ul>
                        </div>
                        <div className=" col-md-3 col-sm-6">
                            <h4 className="text-2xl my-2">How It Works</h4>
                            <ul className="space list-unstyled">
                                <li><a href="/">Businesses</a></li>
                                <li><a href="/">Become a Client</a></li>
                                <li><a href="/">Graphic Designers</a></li>
                            </ul>
                        </div>
                        <div className=" col-md-3 col-sm-6">
                            <h4 className="text-2xl my-2">Work With Me</h4>
                            <ul className="space list-unstyled">
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className=" col-md-3 col-sm-6 ">
                            <h4 className="text-2xl my-2">Contact Me</h4>
                            <ul className="space list-unstyled">
                                <li>Asaf Shapira</li>
                                <li>Mail: dna0187@gmail.com</li>
                                <li>Phone: 052-7307999</li>
                            </ul>
                            <ul className="icons list-unstyled " >
                                <li><a href="https://www.facebook.com/profile.php?id=100006604579009"><Facebook /></a></li>
                                <li><a href="https://www.linkedin.com/in/asaf-shapira-fullstack-developer"><LinkedIn /></a></li>
                                <li><a href="dna0187@gmail.com"><Email /></a></li>
                                <li><a href="https://github.com/superas0187/superas0187"><GitHub /></a></li>
                            </ul>
                            <p className="footer-bottom ">
                            &copy;{new Date().getFullYear()}- All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer; 