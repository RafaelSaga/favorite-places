import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';
import Backdrop from '../components/UIElements/Backdrop';

function MainNavigation(props) {
  const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawer() {
    setDrawerIsOpen(true);
  }

  function closeDrawer() {
    setDrawerIsOpen(false);
  }

  return (
    <React.Fragment>
      {DrawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {DrawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={'/'}>Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;