import React from 'react';
import SidebarItems from './SidebarItems';

import './style.scss';

function Sidebar({ width }) {
    return (
        <div className="sidenav" style={{ width }}>
            <SidebarItems />
        </div>
    );
}

export default Sidebar;