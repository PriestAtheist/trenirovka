import './MobileMenu.scss';
import {NavLink} from 'react-router-dom';
import { RiHome6Line } from "react-icons/ri";
import React from 'react';
import { TbClipboardList } from "react-icons/tb";
import { BiUserCircle,BiDumbbell } from "react-icons/bi";



const MobileMenuLinkActive = ({ isActive }) => isActive ? 'MobileMenu-link-active' : 'MobileMenu-link';

function MobileMenu(){
    
    return (
        <div className='MobileMenu'>
            <div className='MobileMenu-wrap'>
                <NavLink className={MobileMenuLinkActive} to="/">
                    <p><RiHome6Line /></p>
                    <p>Домой</p>
                </NavLink>
                <NavLink className={MobileMenuLinkActive} to="/exercises">
                    <p><BiDumbbell /></p>
                    <p>Упражнения</p>
                </NavLink>
                <NavLink className={MobileMenuLinkActive} to="/programms">
                    <p><TbClipboardList /></p>
                    <p>Программы</p>
                </NavLink>
                <NavLink className={MobileMenuLinkActive} to="/profile">
                    <p><BiUserCircle /></p>
                    <p>Профиль</p>
                </NavLink>
            </div>     
        </div>
    )
}

export default MobileMenu;