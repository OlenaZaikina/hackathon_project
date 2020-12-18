

import './style.scss';

function Sidebar({ width, opened }) {
    const display = opened ? 'inline' : 'none';

    return (
        <div className="sidenav" style={{
            width
        }}>
            <div className="nav-container" >
                <div><i title="home" className="fa fa-home" aria-hidden="true"></i> <span style={{ display }}>Home</span></div>
                <div><i className="fas fa-thumbtack" aria-hidden="true"></i><span style={{ display }}>My Goals</span></div>
                <div><i className="fa fa-plus" aria-hidden="true"></i><span style={{ display }}>Create new goal</span></div>
                <div><i className="fas fa-spinner" aria-hidden="true"></i><span style={{ display }}>Progress</span></div>
                <div><i className="fas fa-check-circle" aria-hidden="true"></i><span style={{ display }}>Update your progress</span></div>
                <div><i className="fas fa-award" aria-hidden="true"></i><span style={{ display }}>Badges</span></div>
            </div>
        </div>
    );
}

export default Sidebar;