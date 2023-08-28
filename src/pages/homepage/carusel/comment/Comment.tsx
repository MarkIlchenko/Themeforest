import AOS from "aos";
import React, {useEffect} from "react";
import './Comment.scss'

interface CommentItem {
    id: number;
    img: string | undefined;
    text: React.ReactNode;
    name: React.ReactNode;
    position: React.ReactNode;
}

interface CommentsProps {
    data: CommentItem[];
}

const CommentNew: React.FC<CommentsProps> = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="comment-wrapper flex justify-around my-20"
             key={`comment`}
        >
            {props.data.map((item, index) => (
                <div key={item.id} className="comment-body rounded-xl relative"
                     data-aos={
                         index % 2 === 0 ? 'zoom-in-up' : 'fade-right'
                     }
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000"
                >
                    <img src={item.img} className={`comment-img`} alt={`icon`}/>
                    <div className="p-8">
                        <h6 className="font-[#292D33]">{item.name}</h6>
                        <p className="mt-2 mb-6">{item.text}</p>
                        <p className="text-small">{item.position}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentNew;