import Card from "../Card/Card";
import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from "../Icons/Icons";

export default function List({ data }) {
    const [current, setCurrent] = useState(0); // Current index in the data array

    const nextSlide = () => {
        setCurrent(current + 3 >= data.length ? 0 : current + 3);
    };

    const prevSlide = () => {
        setCurrent(current - 3 < 0 ? data.length - 3 : current - 3);
    };

    return (
        <div className="mt-10 mx-12 w-full">
            <h1 className="text-forground text-2xl font-bold">Film</h1>
            <div className="mt-5 flex md:flex-row items-center flex-col gap-10">
            <button onClick={prevSlide} className={`text-white${current === 0 ? 'hidden' : ''}`} disabled={current === 0}><ArrowBack className="w-12"/></button>
                <div className="flex md:flex-row flex-col gap-10">
                    {data.map((movie, index) => (
                        <div key={index} className={index >= current && index < current + 3 ? '' : 'hidden'}>
                            <Card data={movie} />
                        </div>
                    ))}
                </div>
                <button className="text-white" onClick={nextSlide} ><ArrowForward className="w-12"/></button>
            </div>
        </div>
    );
}