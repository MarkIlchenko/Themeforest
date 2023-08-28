import Button from "../../../components/UI/Button/Button.tsx";
import './ImageSection.scss'
import React, {useEffect} from "react";
import {initializeAOS} from "../../../AOS/initializeAOS.tsx";

interface SectionProps {
    img: string;
    title: string;
    orderText?: boolean;
    secButton?: boolean;
    addSpacing?: string;
}

const ImageSection: React.FC<SectionProps> = ({img, title, orderText, secButton, addSpacing}) => {
    const isImageFirst = orderText

    if (isImageFirst) {
        console.log("It's true")
    }

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className={`relative ${addSpacing}`}>
            {isImageFirst && (
                <img
                    src={img}
                    alt={`Ìllustration`}
                    data-aos="zoom-in-right"
                    data-aos-duration="2000"
                    className={`herro-illustration ${orderText ? 'left-illustration' : ''}`}
                />
            )}
            <div
                className={
                    `text-wrapper max-w-[520px] py-16 ${orderText ? 'ml-auto' : ''}`
                }
                data-aos="zoom-out-up"
                data-aos-duration="1000"
            >
                <h1>{title}</h1>
                <p className={`mt-2 mb-6`}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className={`flex align-middle justify-between`}>
                    <Button title="Watch the demo" style="prime" />
                    <Button title="Watch the demo" style={`sec ${!secButton ? 'hidden' : 'block'}`}  icon="fa-play" />
                </div>
            </div>
            {!isImageFirst && (
                <img
                    src={img}
                    data-aos="zoom-in-left"
                    data-aos-duration="2000"
                    alt={`Ìllustration`}
                    className={`herro-illustration ${orderText ? 'left-illustration' : ''}`}
                />
            )}
        </section>
    );
};

export default ImageSection;