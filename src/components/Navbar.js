import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
   {
      name: 'Contact',
      to: 'mailto:starryvero@gmail.com',
      active: 'contact'
   },
   {
      name: 'About',
      to: '/portfolio/about',
      active: 'about'
   },
   {
      name: info.initials,
      type: 'initials',
      to: '/portfolio',
      active: 'home'
   },
   {
      name: 'gallery',
      to: '/portfolio/gallery',
      active: 'portfolio'
   }
]

export default function Navbar({darkMode, handleClick}) {
   const location = useLocation()
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

   return (
      <Box component={'nav'} width={'100%'}>
            <Box 
            component={'ul'} display={'flex'} 
            justifyContent={'center'} alignItems={'center'}
            gap={{xs: '1.5rem', md: '8rem'}}
            textTransform={'lowercase'} fontSize={'1rem'}
            >
               {links.map((link, index) => (
                  <Box 
                  key={index} 
                  component={'li'} 
                  className={(link.active === active && !link.type) && Style.active}                       
                  sx={{borderImageSource: info.gradient}}
                  >
                     {link.to.startsWith('mailto:') ? (
                        <a href={link.to} className={Style.link}>
                           {!link.type && (
                              <p style={{ padding: '0.5rem 0' }}>
                                 {link.name}
                              </p>
                           )}
                           {link.type && <h1>{link.name}</h1>}
                        </a>
                     ):(
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                           {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                           {link.type && <h1>{link.name}</h1>}
                        </Link>
                     )}
                  </Box>
               ))}
               <li>
                  <Toggler darkMode={darkMode} handleClick={handleClick}/>
               </li>
            </Box>
      </Box>
   )
}