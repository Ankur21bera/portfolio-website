import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import close_menu from '../../assets/menu_close.svg'
const Navbar = () => {

      const [menu,setMenu] = useState("home");
      const menuRef = useRef();

      const openMenu = () => {
        menuRef.current.style.left="0";
      }

      const closeMenu = () => {
        menuRef.current.style.left="-350px"
      }

  return (
    <div className='navbar'>
      <h3>Web-services</h3>
      <img src={menu_open} onClick={openMenu}  className='nav-mob-open' alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={close_menu} onClick={closeMenu}  className='nav-mob-close' alt="" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar
