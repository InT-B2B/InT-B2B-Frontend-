import Image from "next/image";
import React, { useState, useEffect } from "react";

import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

function Slider({ updateImage, slider0, images }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([slider0]);

   
    useEffect(() => {
        // Update slides whenever the images prop changes
        setSlides([slider0, ...images.map(img => img.url)]);
    }, [slider0, images]);

    
    

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const getDisplayImages = () => {
        const displayIndexes = [
            (currentIndex - 4 + slides.length) % slides.length,
            (currentIndex - 3 + slides.length) % slides.length,
            (currentIndex - 2 + slides.length) % slides.length,
            (currentIndex - 1 + slides.length) % slides.length,
            currentIndex,
        ];

        return displayIndexes.map((index) => (
            <Image
                width={500}
                height={500}
                key={index}
                onClick={() => handleUpdateImage(index)}
                src={slides[index]}
                alt={`Image ${index + 1}`}
                className={`object-cover lg:w-[105px] md:w-[180px] w-[90px] lg:h-[94px] md:h-[131px] h-[95px] rounded-lg cursor-pointer`}
            />
        ));
    };
    
    const handleUpdateImage = (i: number) => {
        updateImage(slides[i]);
    };

    return (
        <div className="relative w-full mx-auto">
            <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="px-2 py-2 rounded-full shadow-lg w-fit absolute bg-white-100 top-8 -left-[10px] lg:block hidden cursor-pointer"
            >
                <ArrowLeft2 size="10" color="#64D1FF" />
            </button>
            <div className="flex w-full max-w-[700px]  justify-evenly md:gap-x-2 gap-x-2 mx-auto overflow-hidden overflow-x-hidden">
                {getDisplayImages()}
            </div>
            <button
                disabled={currentIndex === slides.length - 1}
                onClick={handleNext}
                className="px-2 py-2 rounded-full shadow-lg w-fit absolute bg-white-100 top-8 -right-[10px] lg:block hidden cursor-pointer"
            >
                <ArrowRight2 size="10" color="#64D1FF" />
            </button>
        </div>
    )
}

export default Slider
