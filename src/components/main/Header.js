import './style.scss';

function Header() {
    return (

        <header className="main-header">
            <div className="header-container">
                <div className="header-icon-bar">
                    <span><i className="fa fa-home" aria-hidden="true"></i></span>
                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                    <span><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>
                <div className="sidenav-button">
                <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                </div>
            </div>
        </header>
    )
}
export default Header;