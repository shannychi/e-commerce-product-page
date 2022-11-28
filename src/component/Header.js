import { useState } from "react";
import logo from "../images/logo.svg";
import {FaShoppingCart} from "react-icons/fa";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart";




export default function Header () {
  const [isOpen, setIsOpen] = useState(false)
   const [openCart, setOpenCart] = useState(false)

    return (
      <>
      <header className=" relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
      <div className="flex items-center justify-start gap-4">
        <ul className="flex items-center justify-start gap-4">
            {!isOpen && <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer"/>
                </li>}

               {isOpen &&  <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img src={close} alt="" className="cursor-pointer w-5"/>
                </li>}

            <li>
                <img src={logo} alt=""/>
                </li>
        </ul>
         
         <nav className={isOpen && "open"}>
          <ul className="">
            <li>Collection</li>
            <li>Men</li>
            <li>Woman</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
         </nav>
      </div>
    
      <div className="">
        <ul className="flex items-center justify-start gap-4">
          <li><button onClick={() => setOpenCart(!openCart)}>
            <FaShoppingCart className="text-2xl text-slate-600"/>
            </button></li>
            <li>{openCart && <Cart/>}</li>
          <li><img src={avatar} alt="" className="w-10"/></li>
        </ul>
      </div>
      </header>
      </>
    );
    }