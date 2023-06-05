import React, { useState, useEffect } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust isOpen state based on window width if needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/Other",
      name: "Other",
      icon: <FaRegChartBar />
    },
    {
      path: " ",
      name: "Settings",
      icon: <FaUserAlt />,
      subMenu: [
        { path: "/reqtiles", name: "Request a Tile", isSubMenu: true },
        { path: "/apptiles", name: "Application Tiles", isSubMenu: true },
      ]
    },
  ];

  const renderMenuItems = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.subMenu ? (
              <>
                <div className="flex items-center link">
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </div>
                {isOpen && renderMenuItems(item.subMenu)}
              </>
            ) : (
              <NavLink to={item.path} className="flex items-center link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  };
//-------- using flex this section-------
 // return (
    <div className="flex">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="top_section">
          <h1 className="logo">{isOpen && "Logo"}</h1>
          <div className="bars" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>
        {renderMenuItems(menuItem)}
      </div>
      <main className={`content ${isOpen ? "expand" : ""}`}>
        {children}
      </main>
    </div>
 // );
//};
// ------- side bar container ------------
return (
  <div className="flex">
    <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
      <div className="top_section">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
          <FaBars onClick={toggleSidebar} />
        </div>
      </div>
      {renderMenuItems(menuItem)}
    </div>
    <main>{children}</main>
  </div>
);
};

export default Sidebar;
