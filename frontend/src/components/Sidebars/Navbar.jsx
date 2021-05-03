import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { Nav } from 'react-bootstrap';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Link to='#' >
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            <Nav className="w-25 flex-column" >

                <Nav.Link>
                    <Link to='#' >
                        <AiIcons.AiOutlineClose />
                    </Link>
                </Nav.Link>

                {SidebarData.map((item, index) => {
                    return (
                        <Nav.Link key={index}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </Nav.Link>
                    );
                })}

            </Nav>

        </>
    );
}

export default Navbar;
export { Navbar }