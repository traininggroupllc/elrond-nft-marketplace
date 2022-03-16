import { dAppName } from 'config';
import Bid from 'pages/Bid';
import Collections from 'pages/Collections';
import NFTDetails from 'pages/NFTDetails';
import NFTs from 'pages/NFTs';
import Profiles from 'pages/Profiles';
import UserProfile from 'pages/UserProfile';
import withPageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SingleCollection from './pages/SingleCollection';
import Transaction from './pages/Transaction';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  nfts: '/nfts',
  collections: '/collections',
  profiles: '/profiles',
  nftDetails: '/nft_details',
  bid: '/bid',
  singleCollection: '/single_collection',
  userProfile: '/user_profile'
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  },
  {
    path: routeNames.nfts,
    title: 'View all auctions',
    component: NFTs
  },
  {
    path: routeNames.collections,
    title: 'View all collections',
    component: Collections
  },
  {
    path: routeNames.profiles,
    title: 'View all profiles',
    component: Profiles
  },
  {
    path: routeNames.nftDetails,
    title: 'NFT Details',
    component: NFTDetails
  },
  {
    path: routeNames.bid,
    title: 'Place bid',
    component: Bid
  },
  {
    path: routeNames.singleCollection,
    title: 'Featured Collection Details',
    component: SingleCollection
  },
  {
    path: routeNames.userProfile,
    title: 'User Profile',
    component: UserProfile
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
