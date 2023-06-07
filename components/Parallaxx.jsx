"use client"
import React from 'react'
import Dates from '../public/Hurma_3.webp';
import { Parallax, useParallax } from 'react-scroll-parallax';

const Parallaxx = () => {
    const parallax = useParallax({
        rotate: [0, 360],
    });
    return (
        <div ref={parallax.ref} className="relative border-4 border-red-200 border-solid h-48 md:h-96 w-48 md:w-96 rounded-full flex items-center justify-center text-4xl">
            😵‍💫
            <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">💎</div>
            <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center right-0 top-1/2 -translate-y-1/2 translate-x-1/2">🤡</div>
            <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">💰</div>
            <div className="absolute bg-blue-100 border-2 border-blue-500 border-solid rounded-lg h-14 w-14 flex items-center justify-center top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">👌🏻</div>
        </div>
    );
}

export default Parallaxx