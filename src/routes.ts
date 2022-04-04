import { dAppName } from 'config';
import About from 'pages/About';
import Activity from 'pages/Activity';
import Balance from 'pages/Balance';
import Bid from 'pages/Bid';
import Blog from 'pages/Blog';
import Collections from 'pages/Collections';
import CommunityGuide from 'pages/CommunityGuide';
import Feed from 'pages/Feed';
import Help from 'pages/Help';
import NFTDetails from 'pages/NFTDetails';
import NFTs from 'pages/NFTs';
import Privacy from 'pages/Privacy';
import Profile from 'pages/Profile';
import Profiles from 'pages/Profiles';
import Settings from 'pages/Settings/index';
import Terms from 'pages/Terms';
import Trending from 'pages/Trending';
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
  userProfile: '/user_profile',
  balance: '/balance',
  settings: '/settings',
  profile: '/profile',
  blog: '/blog',
  about: '/about',
  activity: '/activity',
  notification: '/notification',
  feed: '/feed',
  trending: '/trending',
  communityGuidelines: '/community_guidelines',
  terms: '/terms',
  privacy: '/privacy',
  help: '/help'
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
  },
  {
    path: routeNames.balance,
    title: 'Balance',
    component: Balance
  },
  {
    path: routeNames.settings,
    title: 'Settings',
    component: Settings
  },
  {
    path: routeNames.profile,
    title: 'Profile',
    component: Profile
  },
  {
    path: routeNames.blog,
    title: 'Blog',
    component: Blog
  },
  {
    path: routeNames.about,
    title: 'About',
    component: About
  },
  {
    path: routeNames.activity,
    title: 'Activity',
    component: Activity
  },
  {
    path: routeNames.notification,
    title: 'Notification',
    component: Settings
  },
  {
    path: routeNames.feed,
    title: 'Feed',
    component: Feed
  },
  {
    path: routeNames.trending,
    title: 'Trending',
    component: Trending
  },
  {
    path: routeNames.communityGuidelines,
    title: 'Community Guidelines',
    component: CommunityGuide
  },
  {
    path: routeNames.terms,
    title: 'Terms of Service',
    component: Terms
  },
  {
    path: routeNames.privacy,
    title: 'Privacy',
    component: Privacy
  },
  {
    path: routeNames.help,
    title: 'Help',
    component: Help
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
