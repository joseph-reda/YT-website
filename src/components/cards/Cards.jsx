import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import img1 from "../../assts/images/img-1.jpg";
import img2 from "../../assts/images/img-2.jpg";
import img3 from "../../assts/images/img-3.jpg";
import img4 from "../../assts/images/img-4.jpg";
import img5 from "../../assts/images/img-5.jpg";
import img6 from "../../assts/images/img-6.jpg";
import img7 from "../../assts/images/img-7.jpg";
import img8 from "../../assts/images/img-8.jpg";
import img9 from "../../assts/images/img-9.jpg";

const Cards = () => {
    return (
        <div className="cards bg-zinc-700 py-24">
            <div className="p-3 grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                <CardItem
                    src={img1}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img2}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img3}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img4}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img5}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />

                <CardItem
                    src={img6}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img7}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img8}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
                <CardItem
                    src={img9}
                    txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat sed eveniet sapiente. Vero, est!"
                />
            </div>
        </div>
    );
};

export default Cards;
