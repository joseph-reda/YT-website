import React from "react";

import cover from "../../assts/images/img-3.jpg";

const SignUp = () => {
    return (
        <div className="body relative flex flex-col items-center">
        <h1 className="text-8xl font-bold absolute text-white">
                SIGN UP
            </h1>
            <img src={cover} alt="Product Cover" className="w-full h-screen" />
        </div>
    );
};

export default SignUp;
