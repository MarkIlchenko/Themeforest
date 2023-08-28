import { articles } from "../../../../data/data.tsx";
import './Articles.scss'
import {useEffect} from "react";
import {initializeAOS} from "../../../AOS/initializeAOS.tsx";

function Articles() {

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section
            className={
                `custom-feedback bg-[#F1F6FA] rounded-2xl pt-12 pb-4 mt-40`
            }
        >
            <div className='min-[1024px]:max-w-[540px] text-center mx-auto'>
                <h1 className={`min-[1024px]:max-w-[500px]`}>
                    Why our clients choose Ensome?
                </h1>
                <p className={`mt-4`}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className={`article-wrapper flex justify-around mt-16`}>
                {articles.map((item, index) => (
                    <article
                        className={`max-w-[380px] py-8 px-8 rounded-xl bg-white`}
                        key={`${item.title}-${index}`}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <div className={`card-body mt-4`}>
                            <p className={`text-sm mb-5`}>{item.data}</p>
                            <h4>{item.title}</h4>
                            <p className={`mt-2`}>{item.text}</p>
                            <div className='tags-container mt-4'>
                                {item.categories.map((info, index) => (
                                    <a className={`info-wrapper ${index === 0 ? 'ml-0' : 'ml-4'}`} key={info.name}>{info.name}</a>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Articles;
