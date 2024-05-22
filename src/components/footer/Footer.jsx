import React from "react";
import "./Footer.css";

import DeblurIcon from "@mui/icons-material/Deblur";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
    return (
        <div className="footer bg-zinc-900 text-white text-center">
            <div className="pt-20 ">

            <h1 className="text-2xl">
                Join the Adventure newsletter to recelve our best vaction deals
            </h1>
            <h4 className="text-xl py-5">You can unsubscribe at any time</h4>
            <input className="outline-none px-5 py-3 rounded text-black" type="text" placeholder="Your Email" />
            <button className="sub ml-10 text-lg border py-3 px-10 rounded font-medium hover:bg-zinc-600 hover:border-slate-700">Subscribe</button>
            </div>
            <div className="links my-28 text-center">
                <div className="grid grid lg:grid-cols-4 md:grid-cols-3 gap-10">
                    <div className="grid gap-3 place-content-center">
                        <h1 className="text-2xl text-left font-medium">About Us</h1>
                        <ul className="text-left text-lg">
                            <li>How It Works</li>
                            <li>Testimonials</li>
                            <li>Careers</li>
                            <li>Investores</li>
                            <li>Terms Of Services</li>
                        </ul>
                    </div>
                    <div className="grid gap-3 place-content-center">
                        <h1 className="text-2xl text-left font-medium">Contact Us</h1>
                        <ul className="text-left text-lg">
                            <li>Contact</li>
                            <li>Support</li>
                            <li>Destinations</li>
                            <li>Sponsorsships</li>
                        </ul>
                    </div>
                    <div className="grid gap-3 place-content-center">
                        <h1 className="text-2xl text-left font-medium">Videos</h1>
                        <ul className="text-left text-lg">
                            <li>Submit Video</li>
                            <li>Ambassadors</li>
                            <li>Agensy</li>
                            <li>Influencer</li>
                        </ul>
                    </div>
                    <div className="grid gap-3  place-content-center">
                        <h1 className="text-2xl text-left font-medium">Social Media</h1>
                        <ul className="text-left text-lg">
                            <li>Facebook</li>
                            <li>Instegram</li>
                            <li>LinkedIn</li>
                            <li>X</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="end-footer flex justify-around items-center">
                <div className="">

                <span className="logo text-3xl">
                    TRVL <DeblurIcon style={{ fontSize: 50 }} />
                </span>
                TRVL @2024
                </div>
                <div className="flex gap-5">

                <FacebookIcon className="cursor-pointer" style={{ fontSize: 30 }} />
                <InstagramIcon className="cursor-pointer" style={{ fontSize: 30 }} />
                <LinkedInIcon className="cursor-pointer" style={{ fontSize: 30 }} />
                <XIcon className="cursor-pointer" style={{ fontSize: 30 }} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
