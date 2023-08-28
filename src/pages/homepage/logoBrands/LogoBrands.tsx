import './LogoBrands.scss'
import React from "react";

const TAGS = [
    'logo_11.svg',
    'logo_12.svg',
    'logo_13.svg',
    'logo_14.svg',
    'logo_15.svg',
    'logo_16.svg',
    'logo_11.svg',
    'logo_12.svg',
    'logo_13.svg',
    'logo_14.svg',
    'logo_15.svg',
    'logo_16.svg'
];

const DURATION = 15000;
const ROWS = 1;
const TAGS_PER_ROW = 8;

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort( () => .5 - Math.random() );

interface InfiniteLoopSliderProps {
    children: React.ReactNode;
    duration: number;
    reverse?: boolean;
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties}>
            <div className='inner'>
                {children}
                {children}
            </div>
        </div>
    );
};

interface TagProps {
    img: string;
}

const Tag: React.FC<TagProps> = ({ img }) => (
    <img src={`../../../../public/brands/${img}`} alt={img}/>
);

const LogoBrands = () => {
    return (
        <section className='tag-list'>
            {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider
                    key={i}
                    duration={random(DURATION - 5000, DURATION + 5000)}
                    reverse={i % 2 === 1}
                >
                    {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
                        <Tag img={tag} key={`${tag}-${index}`} />
                    ))}
                </InfiniteLoopSlider>
            ))}
            <div className='fade' />
        </section>
    );
};

export default LogoBrands;