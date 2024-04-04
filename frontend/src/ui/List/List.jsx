import Card from "../Card/Card";
import { ArrowBack, ArrowForward } from "../Icons/Icons";
import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function List({ data, items, renderItem, className }) {
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
            <h1 className="text-forground text-2xl pl-12 font-bold">Film</h1>
            <div className="mt-5 flex md:flex-row max-w-full items-center">
                <div className="flex md:flex-row flex-col gap-10 ref={listRef}">
                    {data.map((movie, index) => (
                        <div key={index} className={index >= current && index < current + 3 ? '' : 'hidden'}>
                            <Card data={movie} />
                        </div>
                    ))}
                </div>
                {isOverflowing && !atStart && <ArrowBack className='absolute top-1/2 left-0 transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handlePrev} />}
                {isOverflowing && !atEnd && <ArrowForward className='absolute top-1/2 right-0 transform w-12 text-navBackground -translate-y-1/2 cursor-pointer' onClick={handleNext} />}
            </div>
        </div>
    );
}