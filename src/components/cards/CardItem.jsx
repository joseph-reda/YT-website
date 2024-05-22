import { Link } from "@mui/material";
import React from "react";

import "./Cards.css";

const CardItem = (props) => {
    return (
        <div className="card border-2 border-sky-300 rounded m-auto">
            <Link
                className="flex-row justify-center items-center "
                to={props.path}
            >
                <img src={props.src} alt="" />
                <div className="info text-slate-300">
                    <button className="px-2 py-1 rounded-sm bg-sky-600 font-medium ">
                        decoration
                    </button>
                    <h5 className="p-2 mt-1">{props.txt}</h5>
                </div>
            </Link>
        </div>
    );
};

export default CardItem;
