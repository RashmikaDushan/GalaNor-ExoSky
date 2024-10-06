import React, { useState } from 'react';
import './MenuComponent.css'; // Include your CSS file here

const MenuComponent = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div id="menu-container">
      <div id="menu-wrapper" onClick={handleMenuToggle}>
        <div id="hamburger-menu" className={menuActive ? 'open' : ''}>
          <span></span><span></span><span></span>
        </div>
      </div>

      <ul className={`menu-list accordion ${menuActive ? 'active' : ''}`}>
        {/* Menu 1 */}
        <li id="nav1" className="toggle accordion-toggle" onClick={() => handleAccordionToggle(1)}>
          <span className="icon-plus"></span>
          <a className={`menu-link ${activeAccordion === 1 ? 'active' : ''}`} href="#">Menu1</a>
        </li>
        <ul className={`menu-submenu accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
          <li><a className="head" href="#">Submenu1</a></li>
          <li><a className="head" href="#">Submenu2</a></li>
          <li><a className="head" href="#">Submenu3</a></li>
        </ul>

        {/* Menu 2 */}
        <li id="nav2" className="toggle accordion-toggle" onClick={() => handleAccordionToggle(2)}>
          <span className="icon-plus"></span>
          <a className={`menu-link ${activeAccordion === 2 ? 'active' : ''}`} href="#">Menu2</a>
        </li>
        <ul className={`menu-submenu accordion-content ${activeAccordion === 2 ? 'open' : ''}`}>
          <li><a className="head" href="#">Submenu1</a></li>
          <li><a className="head" href="#">Submenu2</a></li>
        </ul>

        {/* Menu 3 */}
        <li id="nav3" className="toggle accordion-toggle" onClick={() => handleAccordionToggle(3)}>
          <span className="icon-plus"></span>
          <a className={`menu-link ${activeAccordion === 3 ? 'active' : ''}`} href="#">Menu3</a>
        </li>
        <ul className={`menu-submenu accordion-content ${activeAccordion === 3 ? 'open' : ''}`}>
          <li><a className="head" href="#">Submenu1</a></li>
          <li><a className="head" href="#">Submenu2</a></li>
          <li><a className="head" href="#">Submenu3</a></li>
          <li><a className="head" href="#">Submenu4</a></li>
        </ul>
      </ul>
    </div>
  );
};

export default MenuComponent;
