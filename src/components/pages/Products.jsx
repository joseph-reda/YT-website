import React from "react";
import cover from "../../assts/images/img-4.jpg";

const Products = () => {
    return (
        <div className="body relative flex flex-col items-center">
            <h1 className="text-8xl font-bold absolute text-white">
                productes
            </h1>
            <img src={cover} alt="Product Cover" className="h-screen" />
        </div>
    );
};

export default Products;
