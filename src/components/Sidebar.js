import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsMenuButtonWideFill, BsFillHouseGearFill, BsFillGearFill } from 'react-icons/bs';
import { CgCodeSlash } from "react-icons/cg";
import { LuCog } from "react-icons/lu";
import { SiW3C,  SiPowerpages } from "react-icons/si";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar'className={openSidebarToggle ? 'sidebar-responsive': ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> Genesys Learnable
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='#product.js'>
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <SiPowerpages className='icon'/> Product Design
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <CgCodeSlash  className='icon'/> Frontend
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <LuCog className='icon'/> Backend
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <SiW3C className='icon'/> Web3
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsMenuButtonWideFill className='icon'/> Catalogue
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsFillHouseGearFill className='icon'/> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
