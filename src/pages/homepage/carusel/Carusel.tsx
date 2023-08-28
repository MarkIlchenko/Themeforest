import React, { useRef } from 'react';
import { Carousel } from 'antd';
import CommentNew from './comment/Comment.tsx'
import {userComments} from "../../../../data/data.tsx";
import './Carusel.scss';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CaruselNew: React.FC = () => {
    // @ts-ignore
    const carouselRef = useRef<Carousel>(null);

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    return (
        <div className={`mt-20`}>
            <div className={`flex justify-between mb-10`}>
                <h1 className={`max-w-[440px]`}>
                    Trusted by the best in the business
                </h1>
                <div className={`mt-auto`}>
                    <button onClick={handlePrev} className={`prev-button`}>
                        <img src="../../../../public/buttons/before.svg" alt={`prev`} className={` mr-4`}/>
                    </button>
                    <button onClick={handleNext} className={`next-button`}>
                        <img src="../../../../public/buttons/next.svg" alt={`next`} />
                    </button>
                </div>
            </div>
            <Carousel afterChange={onChange} dots={false} ref={carouselRef}>
                <div>
                    <CommentNew data={userComments} />
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default CaruselNew;