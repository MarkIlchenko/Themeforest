import {userFeedback} from "../../../../data/data.tsx";


const Comments = () => {
    return (
        <section
            className={
            `custom-feedback bg-[#F1F6FA] rounded-2xl pt-12 pb-4`
            }
        >
            <div className='min-[1024px]:max-w-[540px] text-center mx-auto'>
                <h1 className={`min-[1024px]:max-w-[500px]`}>
                    Why our clients
                    chosse Ensome?
                </h1>
                <p className={`mt-4`}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className={`article-wrapper flex justify-around mt-16`}>
                {userFeedback.map((item) => (
                    <article className={`max-w-[380px] py-8 px-8 rounded-xl bg-white`}
                             key={item.title}
                             data-aos="flip-left"
                             data-aos-easing="ease-out-cubic"
                             data-aos-duration="2000">

                        <img src={item.img} alt={item.img} className={`card-img`}/>
                        <div className={`card-body mt-4`}>
                            <h4>{item.title}</h4>
                            <p className={`mt-0.5`}>{item.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Comments;