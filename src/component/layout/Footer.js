/******************************************************************************
Title           : Footer.js
Description     : Footer react component.
******************************************************************************/
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <footer className="bg-danger text-white mt-5 p-4 text-center">

            <section className="footer">

                <div className="container">

                    <div className="row">
                        <div className="col-sm col-md col-lg">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li ><Link to="/"><i className="fa fa-angle-double-right"></i> Home</Link></li>
                                <li ><Link to="/addDeal"><i className="fa fa-angle-double-right"></i> Create Post</Link></li>
                                <li ><Link to="/contact-us"><i className="fa fa-angle-double-right"></i> Contact Us</Link></li>
                                <li ><Link to="/howItWorks"><i className="fa fa-angle-double-right"></i> How It Works</Link></li>
                                <li ><Link to="/howItWorks"><i className="fa fa-angle-double-right"></i> FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="col-sm col-md col-lg">
                            <h5>Sponsorships</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link to="/contact-us"><i className="fa fa-angle-double-right"></i> Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="col-sm col-md col-lg">
                            <h5>Mobile Apps</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://www.facebook.com/groups/3611662295538965" target="blank"><i className="fa fa-angle-double-right"></i> Iphone coming</a></li>
                                <li><a href="https://www.facebook.com/groups/3611662295538965" target="blank"><i className="fa fa-angle-double-right"></i> Android coming</a></li>
                                <li><a href="https://www.facebook.com/groups/3611662295538965" target="blank"><i className="fa fa-angle-double-right"></i> Windows coming</a></li>
                                <li><a href="https://www.facebook.com/groups/3611662295538965" target="blank"><i className="fa fa-angle-double-right"></i> Get Started</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-section">
                        <ul className="social">
                            <li className="list-inline-item"><a href="https://www.facebook.com/groups/3611662295538965" target="blank"><i className="fa fa-facebook-square fa-2x footer__icon"></i></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/realcheapny" target="blank"><i className="fa fa-twitter fa-2x footer__icon"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/realcheapny/" target="blank"><i className="fa fa-instagram fa-2x footer__icon"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/realcheapny/" target="blank"><i className="google-plus-g fa fa-google-plus fa-2x footer__icon"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/" target="blank"><i className="fa fa-envelope fa-2x footer__icon"></i></a></li>
                        </ul>

                    </div>


                    <div className="">
                        <p className="footerDescription">
                            Copyright & &#169;{new Date().getFullYear()} Inc. NY, U.S. © All right Reversed <a href="http://realcheapny.com" target="blank"> eDreamerApp.com</a>
                        </p>
                    </div>

                </div>
            </section>

        </footer>
    )
}
