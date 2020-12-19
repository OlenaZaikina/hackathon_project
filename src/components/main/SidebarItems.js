import React from 'react';
import { SidebarData } from './SidebarData';
import './style.scss';
import { Link } from 'react-router-dom'

function Navbar(display) {

  return (
    <div className="nav-container" >
        {SidebarData.map((item, index) => {
            return (
                <div key={index}>
                    <Link to={item.path}>
                        {item.icon}
                        <span style={{ display }}>{item.title}</span>
                    </Link>
                </div>
            );
        })}
    </div>
  );
}

export default Navbar;