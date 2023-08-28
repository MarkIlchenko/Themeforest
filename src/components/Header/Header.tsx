import './Header.scss';
import Button from "../UI/Button/Button.tsx"
import {useState} from "react";

// Data import
import {NavBarData} from "../../../data/data.tsx";

const Header = () => {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuToggle = (index: any) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <nav
            className={
                `navbar flex justify-between align-middle py-4`
            }
        >

            <a className="navbar-brand my-auto" href={"#"}>
                <img
                    className="navbar-logo"
                    alt={`logo`}
                    src={`/logo_blue.svg`}
                />
            </a>
            <div className="navbar-collapse  flex w-full justify-between">
                <ul className={`flex my-auto justify-between max-w-[512px] ml-auto mr-auto navbar-nav`}>
                    {NavBarData.map((item, index) => (
                        <li key={item.name} className={`nav-item relative`}>
                            <a
                                href={`# nav-link`}
                                className={`${index === 0 ? 'ml-0 text-[#292D33] font-extrabold opacity-75 ' : 'ml-10'} text-sm`}
                                onClick={() => handleSubMenuToggle(index)}
                            >
                                {item.name}
                            </a>
                            {Array.isArray(item.subMenu) && item.subMenu.length > 0 && index === activeSubMenu && (
                                <ul className="dropdown-menu">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <li className={`dropdown-nav ${subIndex === 0 ? 'mt-0': 'mt-4'}`} key={subIndex}>
                                            <a
                                                className={
                                                    `dropdown-item text-xs text-[#292D33] opacity-75 font-extrabold italic`
                                                } href="#"
                                            >
                                                {subItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <Button title="Watch the demo" style="prime" icon="fa-play" />
            </div>
        </nav>
    );
};

export default Header;