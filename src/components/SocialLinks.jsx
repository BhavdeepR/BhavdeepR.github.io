import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs"
import Bhavdeeps_Resume from '../assets/portfolio/Bhavdeeps_Resume.pdf'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/bhavdeep-randhawa-232867264/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/BhavdeepR',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:bhavdeepr19@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: Bhavdeeps_Resume,
            style: 'rounded-br-md',
            download: true
        },
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {links.map(({id, child, href, style, download}) => (
                // eslint-disable-next-line
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rouned-med duration-300  bg-gray-500" + " " + style}>
                <a
                    href={href}
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel="noreferrer"
                    
                >
                    {child}
                </a>
            </li>

            ))}
        </ul>
    </div>
  )
}

export default SocialLinks;