import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
    const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

    const toggleHomeDropdown = () => {
        setIsHomeDropdownOpen(!isHomeDropdownOpen);
        setIsProjectsDropdownOpen(false); // Close other dropdowns
        setIsBlogDropdownOpen(false);
    };

    const toggleProjectsDropdown = () => {
        setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
        setIsHomeDropdownOpen(false); // Close other dropdowns
        setIsBlogDropdownOpen(false);
    };

    const toggleBlogDropdown = () => {
        setIsBlogDropdownOpen(!isBlogDropdownOpen);
        setIsHomeDropdownOpen(false); // Close other dropdowns
        setIsProjectsDropdownOpen(false);
    };

    const closeDropdowns = () => {
        setIsHomeDropdownOpen(false);
        setIsProjectsDropdownOpen(false);
        setIsBlogDropdownOpen(false);
    };

    return (
        <div className="relative flex justify-center z-10">
            <div className="container min-w-[1420px]">
                <div className="py-2">
                    <div className="flex items-center justify-between min-h-14">
                        <div className="flex items-center gap-10 text-white w-1/2">
                            <a href="#" className="text-lg font-semibold flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                1044123456789
                            </a>
                            <p className="text-lg font-semibold flex items-center">
                                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                27 Divil St, Berlin, Germany
                            </p>
                            <a href="#" className="text-lg font-semibold flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                info@crete.com
                            </a>
                        </div>
                        <div className="flex items-center justify-end gap-12 text-gray-700 w-1/2">
                            <div className="cursor-pointer font-semibold">
                                <span className="text-lg">English</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <a href="#" className="text-gray-600">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white px-10 shadow-md">
                    <div className="flex items-center">
                        <div className="w-1/6">
                            <a href="#">
                                <img
                                    className="h-auto max-w-full"
                                    src="https://crete.themepreview.xyz/home-one/wp-content/themes/crete/assets/images/logo.svg"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="w-7/12 pl-12">
                            <ul className="flex space-x-4 text-gray-700 text-xl font-semibold justify-end">
                                <li className="relative">
                                    <a
                                        href="#"
                                        className="block py-11 px-4 relative"
                                        onMouseEnter={toggleHomeDropdown}
                                        onMouseLeave={toggleHomeDropdown}
                                    >
                                        Home
                                        <FontAwesomeIcon className='pl-2' icon="fa-solid fa-chevron-down" />
                                        {isHomeDropdownOpen && (
                                            <ul className="absolute left-0 mt-1 w-48 bg-white  shadow-lg z-10 py-2 text-left top-28">
                                                <li className='relative m-0 block'>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 2
                                                    </a>
                                                </li>
                                                {/* Add more submenu items as needed */}
                                            </ul>
                                        )}
                                    </a>
                                </li>
                                <li className="relative">
                                    <a
                                        href="#"
                                        className="block py-11 px-4"
                                        onMouseEnter={toggleProjectsDropdown}
                                        onMouseLeave={toggleProjectsDropdown}
                                    >
                                        Projects
                                        <FontAwesomeIcon className='pl-2' icon="fa-solid fa-chevron-down" />
                                        {isProjectsDropdownOpen && (
                                            <ul className="absolute left-0 mt-1 w-48 bg-white  shadow-lg z-10 py-2 text-left top-28">
                                                <li>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 2
                                                    </a>
                                                </li>
                                                {/* Add more submenu items as needed */}
                                            </ul>
                                        )}
                                    </a>
                                </li>
                                <li className="relative">
                                    <a
                                        href="#"
                                        className="block py-11 px-4"
                                        onMouseEnter={toggleBlogDropdown}
                                        onMouseLeave={toggleBlogDropdown}
                                    >
                                        Blog
                                        <FontAwesomeIcon className='pl-2' icon="fa-solid fa-chevron-down" />
                                        {isBlogDropdownOpen && (
                                            <ul className="absolute left-0 mt-1 w-48 bg-white  shadow-lg z-10 py-2 text-left top-28">   
                                                <li>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4">
                                                        Submenu Item 2
                                                    </a>
                                                </li>
                                                {/* Add more submenu items as needed */}
                                            </ul>
                                        )}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-11 px-4"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-11 px-4"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <a
                                href="#"
                                className="bg-blue-600 text-white py-3.5 px-9 font-bold rounded-xl overflow-hidden text-xl"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}