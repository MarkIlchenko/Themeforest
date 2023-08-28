import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
    title: string;
    style: string;
    space?: string;
    icon?: boolean | string;
    color?: string;
}

function Button({ title, style, icon, space, color }: ButtonProps) {
    if (icon) {

        return (
            <button className={style}>
                <span className={`${color} mr-2 mx-auto my-auto ${space}`}>
                    {/*@ts-ignore*/}
                    <FontAwesomeIcon  icon={icon} />
                </span>

                {title}
            </button>
        )
    }

    return (
        <button className={`${style} px-12 ${space} ${color}`}>
            {title}
        </button>
    )
}

export default Button
