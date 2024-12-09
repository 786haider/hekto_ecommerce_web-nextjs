"use client"
import { useState } from "react";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";


export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="">
      <div className=" flex bg-violet-500 " style={{ height: "20px" }}>
        <h1 className="flex text-white sm:text-sm md:text-sm lg:text-sm xl:text-sm ml-24  ">
          <CiMail className="text-white ml-6 sm:ml-6 md:ml-60 font-bold lg:ml-8 xl:ml-10 2xl:ml-10 hidden md:block " />
          <span className="ml-1 mb-2 text-white text-xs opacity-90 hidden md:block">
            haiderhussain536@gmail.com{" "}
          </span>
          <FaPhoneVolume className="text-white ml-4 mr-1 text-sm opacity-70 hidden md:block " />
          <span className="mb-2 text-white text-xs opacity-90 hidden md:block">
            +92 3101318508
          </span>
        </h1>
        <details className="dropdown dropdown-endtext-white text-xs opacity-90 hidden md:block text-white ml-44 ">
          <summary>English</summary>
          <summary className="hidden md:block text-black">
            <Link href="/">French </Link>
          </summary>
          <summary className="hidden md:block text-black">
            <Link href="/">Urdu</Link>
          </summary>
          <summary className="hidden md:block text-black">
            <Link href="/">Spanish</Link>
          </summary>
        </details>
        <details className="dropdown dropdown-endtext-white text-xs opacity-90 hidden md:block text-white ml-5">
          <summary>USD</summary>
          <summary className="hidden md:block text-black">
            <Link href="/">PKR </Link>
          </summary>
          <summary className="hidden md:block text-black">
            <Link href="/">INR</Link>
          </summary>
        </details>
        <h1 className="hidden md:block text-xs opacity-90">
          <Link href={"/login"} className="flex   text-white ml-4">
            Login <CgProfile className="mt-1 ml-1" />
          </Link>
        </h1>
        <h1 className="hidden md:block text-xs opacity-90">
          <Link href={"/login"} className="flex   text-white ml-4">
            Wishlist <FaRegHeart className="mt-1 ml-1" />
          </Link>
        </h1>
        <h1 className="hidden md:block text-sm ">
          <Link href={"/login"} className="flex   text-white ml-4">
            <IoCartOutline className="mt-1 ml-1" />
          </Link>
        </h1>
      </div>
      <div>
        <div className="flex">
         <h1 style={{color:'rgba(13, 14, 67, 1)',width:'98px', height:'34px', top:'3px',font:'josefin sans' ,fontWeight:'700',fontSize:'34px',lineHeight:'34px'}}
         className="flex justify-center items-center mt-2 ml-2 md:ml-32 ">
         Hekto
         </h1>
         <h2 className="hidden md:block ml-16 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Home</Link>
         </h2>
         <h2 className="hidden md:block ml-6 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Pages</Link>
         </h2>
         <h2 className="hidden md:block ml-6 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Products</Link>
         </h2>
         <h2 className="hidden md:block ml-6 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Blog</Link>
         </h2>
         <h2 className="hidden md:block ml-6 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Shop</Link>
         </h2>
         <h2 className="hidden md:block ml-6 mt-4 text-lg ">
          <Link href={'/'} className="hover:text-pink-500 hover:underline">Contact</Link>
         </h2>
         <div className="md:flex lg:flex xl:flex 2xl:flex hidden  items-center border border-gray-300   max-w-[520px] h-8  w-44  md:w-80 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto mr-16 md:mr-auto mt-3">
  <input type="text" 
  placeholder="Search..."
  className="ml-2 disabled:bg-transparent disabled:border-none focus:outline-none"/>
  <div className=" bg-pink-500 " style={{marginLeft:'104px',height:'30px'}}>
<FaSearch className=" mt-2.5 ml-2 text-white mb-1 mr-1 text-sm hidden md:block lg:block xl:block 2xl:block"/>
  </div>
         </div>
         <div>
            <TiThMenu
              className="md:hidden lg:hidden xl:hidden 2xl:hidden ml-52 sm:ml-44 mt-4 text-3xl cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen &&  (
              <div
                className="absolute right-0 mt-2 w-48 bg-[rgba(13,14,67,1)] text-white rounded shadow-lg transition-all duration-300"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Home
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Pages
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Products
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Blog
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Shop
                </Link>
                <Link href="/" className="block px-4 py-2 hover:bg-violet-600">
                  Contact
                </Link>
                <Link href="/login" className="block px-4 py-2 hover:bg-violet-600">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
