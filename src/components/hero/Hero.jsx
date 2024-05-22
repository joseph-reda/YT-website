import React from "react";
import "./Hero.css";


const Hero = () => {
    return (
        <div className="hero bg-zinc-900">
            <div className="info flex flex-col items-center justify-between text-white text-center py-40 mx-2">
                <h1 className="text-8xl font-bold">ADVENTURE AWAIYS</h1>
                <p className="text-4xl font-medium my-14">
                    What are wating for?
                </p>
                <div className="flex gap-10 text-2xl mt-5">
                    <button className="border  rounded-sm p-4 font-bold border-solid border-inherit">
                        GET STARTED
                    </button>
                    <button className="p-4 rounded border-none font-bold bg-slate-200 text-black">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
