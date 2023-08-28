import React, {useEffect} from "react";
import './Company.scss';
import {initializeAOS} from "../../../AOS/initializeAOS.tsx";

interface CompanySection {
    title: string;
    text: string;
}

interface CompanySectionNew {
    data: CompanySection[];
}

const Company: React.FC<CompanySectionNew> = ({ data }) => {
    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className={`company-wrapper rounded-2xl flex justify-around pb-6 pt-6 px-16`}>
            {data.map((item, index) => (
                <div key={item.title} className={`flex ${index === 3 ? 'w-fit' : 'w-full'} justify-between` } data-aos="fade-up"
                     data-aos-duration="1400">
                    <div key={index} className={`w-fit flex flex-col items-center`}>
                        <p className={`digit text-center`}>{item.title}</p>
                        <p className={`text-white text-center whitespace-nowrap`}>{item.text}</p>
                    </div>
                    <div className={`${index === 3 ? '' : 'comment-shape' } mx-auto`}></div>
                </div>
            ))}
        </section>

    );
};

export default Company;