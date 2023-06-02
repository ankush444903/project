/*
import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
                <div className="link" onClick={toggle}>
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
            <FaBars onClick={toggle} />
          </div>
        </div>
        {renderMenuItems(menuItem)}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;*/

import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './tailwind.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/other",
      name: "Other",
      icon: <FaRegChartBar />
    },
    {
      path: " ",
      name: "Settings",
      icon: <FaUserAlt />,
      subMenu: [
        { path: "/productList", name: "Request a Tile", isSubMenu: true },
        { path: "/product", name: "Application Tiles", isSubMenu: true }
      ]
    }
  ];

  const renderMenuItems = (items) => {
    return (
      <ul className="mt-6">
        {items.map((item, index) => (
          <li key={index}>
            {item.subMenu ? (
              <>
                <div className="flex items-center text-gray-300 cursor-pointer" onClick={toggle}>
                  <div className="mr-2">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                </div>
                {isOpen && renderMenuItems(item.subMenu)}
              </>
            ) : (
              <NavLink to={item.path} className="flex items-center text-gray-300" activeClassName="active">
                <div className="mr-2">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container flex">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar bg-white text-gray-900">
        <div className="top_section flex items-center justify-between p-4">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo text-2xl font-bold">Logo</h1>
          <div className="bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
        {renderMenuItems(menuItem)}
      </div>
      <main className="w-full p-6">{children}</main>
    </div>
  );
};

export default Sidebar;

