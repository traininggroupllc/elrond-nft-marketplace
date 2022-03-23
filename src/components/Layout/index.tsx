import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import TabNavigation from 'pages/common/TabNavigation';
import routes, { routeNames } from 'routes';
import Footer from './Footer';
import Navbar from './Navbar';
import SecondaryFooter from './SecondaryFooter';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      {window.location.pathname === '/' ||
      window.location.pathname === '/nft_details' ||
      window.location.pathname === '/bid' ||
      window.location.pathname === '/single_collection' ||
      window.location.pathname === '/user_profile' ||
      window.location.pathname === '/balance' ||
      window.location.pathname === '/profile' ||
      window.location.pathname === '/settings' ||
      window.location.pathname === '/activity' ||
      window.location.pathname === '/notification' ||
      window.location.pathname === '/feed' ||
      window.location.pathname === '/trending' ||
      window.location.pathname === '/community_guidelines' ||
      window.location.pathname === '/about' ||
      window.location.pathname === '/blog' ? (
        <>
          {' '}
          {window.location.pathname === '/user_profile' ||
          window.location.pathname === '/single_collection' ? (
            ''
          ) : (
            <Navbar />
          )}
        </>
      ) : (
        <div>
          <Navbar />
          <TabNavigation />
        </div>
      )}
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      {window.location.pathname === '/nft_details' ||
      window.location.pathname === '/bid' ||
      window.location.pathname === '/user_profile' ||
      window.location.pathname === '/single_collection' ||
      window.location.pathname === '/balance' ||
      window.location.pathname === '/activity' ||
      window.location.pathname === '/trending' ? (
        <SecondaryFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
