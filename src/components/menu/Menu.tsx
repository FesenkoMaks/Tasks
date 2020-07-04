import React, {useState} from 'react';
import s from './Menu.module.css';
import { NavLink } from 'react-router-dom';




function Menu() {
    let [isHidden , setIsHidden] = useState(false)
    function hiddenMenu() {
        let a = !isHidden;
        setIsHidden(a)
    }

    return (

        <div className={s.menu}>
            <button className={s.menuBtn} onClick={hiddenMenu}>Menu</button>
            <div className={isHidden ? s.menuHidden : s.menuItems} ><NavLink to={'/TaskOneFour'} activeClassName={s.isActive}> Prejunior </NavLink></div>
            <div
                className={isHidden ? s.menuHidden : s.menuItems}><NavLink to={'/2'} activeClassName={s.isActive}> junior </NavLink></div>
            <div className={isHidden ? s.menuHidden : s.menuItems}><NavLink to={'/3'} activeClassName={s.isActive}> junior+ </NavLink></div>
        </div>

    )
}

export default Menu