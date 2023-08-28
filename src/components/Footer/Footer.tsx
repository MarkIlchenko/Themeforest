import './Footer.scss'
import {footerContacts, footerData, footerLogo} from "../../../data/data.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer
            className={
            `mt-20 footer bg-[#F1F6FA] rounded-2xl py-16 px-12 mb-10`
            }
            data-aos="fade-up"
        >
            <div className={`flex justify-between align-top mb-10`}>
                <img src={`/logo_blue.svg`} alt={`logo`} className={`mb-auto`}/>
                <div className={`footer-wrapper flex justify-between w-full max-w-[440px]`}>
                    {footerData.map((item) => (
                        <div key={item.name} className={`footer-list `}>
                            <p className={`footer-name`}>{item.name}</p>
                            <ul>
                                {item.addLink.map((link) => (
                                    <li key={link.title} className={`footer-sub-name mt-2`}>
                                        {link.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`footer-shape`}></div>
            <div className={`flex justify-between mt-10 mb-10`}>
                <div>
                    <h6>Contacts</h6>
                    <div className={`flex justify-between max-w-[540px] mt-4`}>
                        {footerContacts.map((contact, index) => (
                            <div key={contact.name} className={`${index === 0 ? 'ml-0' : 'ml-10'}`}>
                                <p className={`contacts-info`}>{contact.name}</p>
                                <p className={` mt-2 flex align-middle`}>
                                    <span className={`contacts-detail`}>
                                        {contact.title}
                                    </span>
                                    <FontAwesomeIcon  icon={faArrowRight} className={`ml-4 my-auto text-black`} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h6>Social</h6>
                    <div className={`flex justify-between mt-4`}>
                        {footerLogo.map((logo, index) => (
                            <img
                                src={logo.img}
                                alt={logo.name}
                                key={logo.name}
                                className={`${index === 0 ? 'ml-0' : 'ml-4'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={`footer-shape`}></div>
            <div className={`flex justify-between mt-10`}>
                <div className={`flex`}>
                    <p
                        className={` mt-2 flex align-middle w-[196px]`}
                    >
                        <span className={`contacts-detail text-[#9497A1]`}>Privacy policy</span>
                        <FontAwesomeIcon  icon={faArrowRight} className={`ml-4 my-auto text-[#9497A1]`} />
                    </p>
                    <p
                        className={` mt-2 flex align-middle ml-4`}
                    >
                        <span className={`contacts-detail text-[#9497A1]`}>Terms of us</span>
                        <FontAwesomeIcon  icon={faArrowRight} className={`ml-4 my-auto text-[#9497A1]`} />
                    </p>
                </div>
                <p className={`text-xs my-auto`}>© 2022 Ensome. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
