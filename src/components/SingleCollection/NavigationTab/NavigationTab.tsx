import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationTab = () => {
  return (
    <div className='tab__menu'>
      <ul>
        <NavLink to={''}>
          <li>NFTs</li>
        </NavLink>
        <NavLink to={''}>
          <li>Description</li>
        </NavLink>
        <NavLink to={''}>
          <li>Activity</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavigationTab;
