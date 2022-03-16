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
      window.location.pathname === '/single_collection' ? null : (
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
      window.location.pathname === '/bid' ? (
        <SecondaryFooter />
      ) : // <Footer />
      null}
    </div>
  );
};

export default Layout;
