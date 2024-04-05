import Card from "../Card/Card";
import { ArrowBack, ArrowForward } from "../Icons/Icons";
import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function List({ data }) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const listRef = useRef(null);

    const checkOverflow = useCallback(() => {
        if (listRef.current) {
            setIsOverflowing(listRef.current.scrollWidth > listRef.current.clientWidth);
            setAtEnd(listRef.current.scrollWidth - listRef.current.scrollLeft === listRef.current.clientWidth);
        }
    }, []);

    useEffect(() => {
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [checkOverflow]);

    const handleNext = useCallback(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft + listRef.current.offsetWidth,
                behavior: 'smooth'
            });
            setAtStart(false);
            setAtEnd(listRef.current.scrollWidth - (listRef.current.scrollLeft + listRef.current.offsetWidth) <= listRef.current.clientWidth);
        }
    }, []);

    const handlePrev = useCallback(() => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft - listRef.current.offsetWidth,
                behavior: 'smooth'
            });
            setAtEnd(false);
            setAtStart(listRef.current.scrollLeft - listRef.current.offsetWidth <= 0);
        }
    }, []);

    return (
        <div className="mt-10 px-12 w-full">
            <h1 className="text-forground text-2xl font-bold">Film</h1>
            <div className="mt-5 flex flex-row max-w-full items-center">
                <div className="flex h-[32rem] gap-10 overflow-hidden" ref={listRef}>
                    {data.map((movie, index) => (
                        <div key={index} className="">
                            <Card data={movie} />
                        </div>
                    ))}
                </div>
                <div className="h-[20rem]">
                    <div className="ml-4">
                        {isOverflowing && !atStart && <ArrowBack className='text-forground absolute left-0  transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handlePrev} />}
                    </div>
                        {isOverflowing && !atEnd && <ArrowForward className='text-forground absolute right-0 transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handleNext} />}
                </div>
            </div>
        </div>
    );
}