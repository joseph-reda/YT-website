import React from "react";
import "./style.css";


import cover from "../../assts/images/img-2.jpg";

const Services = () => {
    return (
        <div className="body relative flex flex-col items-center">
        <h1 className="text-8xl font-bold absolute text-white">
                Services
            </h1>
            <img src={cover} alt="Product Cover" className="w-full h-screen" />
        </div>
    );
};

export default Services;
