import React, { useState, useEffect } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Set the initial state of isOpen to true to keep the sidebar open

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 600); // Set isOpen based on the window width
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
        { path: "/productList", name: "Request a Tile", isSubMenu: true },
        { path: "/product", name: "Application Tiles", isSubMenu: true },
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
                <div className="link" onClick={toggleSidebar}>
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </div>
                {isOpen && renderMenuItems(item.subMenu)}
              </>
            ) : (
              <NavLink to={item.path} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
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
