import { useState } from 'react'
import Logo from './logo';
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "ABOUT", link: "/about" },
    { name: "SKILL", link: "/skill" },
    { name: "PROJECT", link: "/project" },
    { name: "BLOG'S", link: "/article" },
    { name: "CONTACT", link: "/contactme" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className={`w-full absolute top-0 left-0 mt-10`}>
      <div className='md:flex items-center justify-around py-4 md:px-10 px-7'>
        <Link to='/'><Logo className="" /></Link>


        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0  pb-12  bg-transparent backdrop-blur-2xl absolute md:static z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl  rounded-full hover:backdrop-blur-xl  px-5 py-3 md:my-0 my-7'>
                <a href={link.link} className='text-black duration-500'>{link.name}</a>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default Nav