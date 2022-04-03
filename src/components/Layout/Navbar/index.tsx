import React, { useState } from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import ProfilePopover from 'components/common/ProfilePopover';
import { routeNames } from 'routes';
import PowerIcon from '../../../assets/icons/power.png';
import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const { address } = useGetAccountInfo();

  // const handleLogout = () => {
  //   logout(`${window.location.origin}/unlock`);
  // };

  const handelWalletConnect = () => {
    setWalletConnected(!walletConnected);
  };

  const isLoggedIn = Boolean(address);

  // autocomplete search box
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ];

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item: any) => {
    return (
      <>
        <div className='search__formate--result'>
          <img
            className='search__formate--result__img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE7kc1-_qDjn3D1_BbI_bc5HS5iolF_1sAA&usqp=CAU'
            alt='search-image'
          />
          <p className='text-secondary'>{item.name}</p>
        </div>
      </>
    );
  };

  return (
    <BsNavbar className='nav flex-column px-4'>
      <div className={`nav__details ${menuOpen && 'nav__detailsOpen'}`}>
        {searchOpen ? (
          <Nav className='navBar__search'>
            <NavItem>
              <div className='d-flex align-items-center'>
                <AiOutlineSearch className='search__icon' />
                <input type='text' placeholder='Search Foundation...' />
              </div>
            </NavItem>
            <NavItem>
              <Button
                variant='light'
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </Button>
            </NavItem>
          </Nav>
        ) : (
          <Nav className='navBar container-xl'>
            <NavItem>
              <Link
                className='navBar__link'
                to={isLoggedIn ? routeNames.dashboard : routeNames.home}
              >
                <ElrondLogo className='navBar__logo' />
              </Link>
            </NavItem>
            <NavItem className='navBar__navItem'>
              <div className='d-flex align-items-center'>
                <AiOutlineSearch className='search__icon' />
                <input type='text' placeholder='Search Foundation...' />
                {/* working here */}
                {/* <div className='navBar__navItem--search__box'>
                  <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    placeholder='Search Foundation...'
                  />
                </div> */}
              </div>
            </NavItem>
            <NavItem className='navBar__navItem'>
              <ProfilePopover handelWalletConnect={handelWalletConnect} />
            </NavItem>
            <NavItem className='navBar__navItem'>
              {walletConnected ? (
                <Link to={'/feed'}>
                  <h4>Feed</h4>
                </Link>
              ) : (
                <Link to={'/about'}>
                  <h4>About</h4>
                </Link>
              )}
            </NavItem>
            <NavItem className='navBar__navItem'>
              {walletConnected ? (
                <Link to={'/activity'}>
                  <h4>Activity</h4>
                </Link>
              ) : (
                <Link to={'/blog'}>
                  <h4>Blog</h4>
                </Link>
              )}
            </NavItem>
            {/* after connect wallet wallet */}
            {walletConnected && (
              <NavItem className='navBar__navItem'>
                <Link to='/notification'>
                  <div className='navBar__navItem--setting'>
                    <img src={PowerIcon} alt='user' />
                  </div>
                </Link>
              </NavItem>
            )}
            {walletConnected && (
              <NavItem className='navBar__navItem'>
                <div className='navBar__navItem--userImg'>
                  <ProfilePopover
                    isProfile={true}
                    handelWalletConnect={handelWalletConnect}
                  />
                </div>
              </NavItem>
            )}
            {walletConnected ? (
              <NavItem className='navBar__navItem'>
                <Button variant='dark'>Create</Button>
              </NavItem>
            ) : (
              <NavItem className='navBar__navItem'>
                <Button onClick={handelWalletConnect} variant='dark'>
                  Connect wallet
                </Button>
              </NavItem>
            )}

            <NavItem className='navBar__button'>
              <Button
                variant='light'
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </Button>
              <Button variant='light' onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='3' y1='12' x2='21' y2='12' />
                    <line x1='3' y1='6' x2='21' y2='6' />
                    <line x1='3' y1='18' x2='21' y2='18' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18' />
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
                )}
              </Button>
            </NavItem>
          </Nav>
        )}
      </div>
      {menuOpen && (
        <div className='navBar__menu'>
          <section>
            {walletConnected && <h3>Feed</h3>}
            <Link to='/nfts' style={{ color: 'black', outline: 'none' }}>
              <h3>Browse</h3>
            </Link>
            <Link to='/blog' style={{ color: 'black', outline: 'none' }}>
              <h3>Blog</h3>
            </Link>
            <Link to='/about' style={{ color: 'black', outline: 'none' }}>
              <h3>About</h3>
            </Link>
            <h3>Career</h3>
            <h3>Help</h3>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
          </section>

          <div>
            <Button variant='light'>Connect wallet</Button>
            <div>
              <div>
                <p>Press</p>
                <p>Terms of service</p>
              </div>
              <div>
                <p>Community Guideline</p>
                <p>Privacy</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </BsNavbar>
  );
};

export default Navbar;
