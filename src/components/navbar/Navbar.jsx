import React, { useState, useEffect } from "react";
import "./Navbar.css";

import MenuIcon from "@mui/icons-material/Menu";
import DeblurIcon from "@mui/icons-material/Deblur";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [menu, setMenu] = useState(false);

    const handelClick = () => {
        setClick(!click);
    };

    const handelMenu = () => {
        if (window.innerWidth <= 650) setMenu(true);
        else setMenu(false);
    };

    useEffect(() => {
        handelMenu();

        window.addEventListener("resize", handelMenu);

        return () => {
            window.removeEventListener("resize", handelMenu);
        };
    }, []);

    return (
        <div className="navbar bg-zinc-950 p-4 text-white relative">
            <div className="nav flex items-center mx-10">
                <Link to="/">
                    <h2 className="logo text-3xl">
                        TRVL <DeblurIcon style={{ fontSize: 50 }} />
                    </h2>
                </Link>

                <div className="links flex flex-grow">
                    {menu ? (
                        <div className="ml-auto">
                            {click ? (
                                <div className="menu bg-zinc-950 absolute left-0  w-screen z-10">
                                    <span
                                        className="close float-end mr-10 cursor-pointer"
                                        onClick={handelClick}
                                    >
                                        <CloseIcon style={{ fontSize: 35 }} />
                                    </span>
                                    <ul className="text-center text-3xl mt-10 z-10">
                                        <Link to="/">
                                            <li>Home</li>
                                        </Link>
                                        <Link to="/services">
                                            <li>Services</li>
                                        </Link>
                                        <Link to="/products">
                                            <li>Product</li>
                                        </Link>
                                        <Link to="signUp">
                                            <li>
                                                <button className="border-2 border-solid rounded-sm py-2 px-4">
                                                    Sign Up
                                                </button>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ) : (
                                <span
                                    className="cursor-pointer"
                                    onClick={handelClick}
                                >
                                    <MenuIcon style={{ fontSize: 40 }} />
                                </span>
                            )}
                        </div>
                    ) : (
                        <ul className="flex-grow flex gap-24 justify-end items-center mr-10 font-semibold text-xl text-slate-100">
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/services">
                                <li>Services</li>
                            </Link>
                            <Link to="/products">
                                <li>Product</li>
                            </Link>

                            <Link to="signUp">
                                <li className="font-medium text-xl">
                                    <button className="border-2 border-solid rounded-sm py-1 px-3">
                                        Sign Up
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
