import React from 'react';
import SidebarItems from './SidebarItems';

import './style.scss';

function Sidebar({ width, opened }) {
    const display = opened ? 'inline' : 'none';

    return (
        <div className="sidenav" style={{ width }}>
        <SidebarItems />
        </div>
    );
}

export default Sidebar;