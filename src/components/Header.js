import React from 'react';
import { BsFillBellFill, BsSearch, BsJustify } from 'react-icons/bs';
import { IoIosContact, IoIosMail } from "react-icons/io";


function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className='menu-icon'>
      <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      <div className='header-left'>
        <BsSearch  className='icon'/>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <IoIosMail className='icon'/>
        <IoIosContact className='icon'/>
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
