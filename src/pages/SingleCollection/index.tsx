import React, { useState } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Popup from 'reactjs-popup';
import NFTCard from 'components/common/NFTCard';
import UserPopover from 'components/common/UserPopover';
import SingleCollectionNav from 'components/Layout/SingleCollectionNav';
import { Link } from 'react-router-dom';

const SingleCollection = () => {
  const [selectedTab, setSelectedTab] = useState('nfts');
  return (
    <>
      <div className='singleCollection'>
        <div className='singleCollection__top'>
          <SingleCollectionNav />
          <div className='container-xl'>
            <div>
              <img
                src='https://f8n-production.imgix.net/collections/hb8dlcndu-LOGO.png?q=50&w=160&h=160&auto=format%2Ccompress&fit=crop&dpr=2'
                alt=''
              />
            </div>
            <p>
              PIT
              <RiShareBoxFill className='singleCollection__topShareIcon' />
            </p>
            <h2>The Pit</h2>
            <UserPopover position='bottom left' />
          </div>
        </div>
        <div className=' container-xl singleCollection__bottom'>
          <div className='singleCollection__bottomTop'>
            <div>
              <div>
                <div>
                  <p>Collection of</p>
                  <p>9</p>
                </div>
                <div>
                  <p>Owned by</p>
                  <p>1</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Floor price</p>
                  <p>0.70 ETH</p>
                </div>
                <div>
                  <p>Total Sales</p>
                  <p>4 ETH</p>
                </div>
              </div>
            </div>
            <div>
              <Popup
                trigger={
                  <Button variant='light'>
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
                      <circle cx='12' cy='12' r='1' />
                      <circle cx='19' cy='12' r='1' />
                      <circle cx='5' cy='12' r='1' />
                    </svg>
                  </Button>
                }
                position='bottom right'
                closeOnDocumentClick
                arrow={false}
              >
                <Button
                  style={{
                    color: 'red',
                    fontSize: '16px',
                    padding: '10px',
                    fontWeight: '600',
                    marginTop: '10px',
                    borderRadius: '8px',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                  variant='light'
                >
                  🚫 Report
                </Button>
              </Popup>
              <Button variant='light'>
                <div>
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
                    <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
                    <polyline points='16 6 12 2 8 6' />
                    <line x1='12' y1='2' x2='12' y2='15' />
                  </svg>
                  <p>Share</p>
                </div>
              </Button>
            </div>
          </div>
          <div className='singleCollection__bottomBottom'>
            <div className='singleCollection__bottomBottomTab'>
              <p
                onClick={() => setSelectedTab('nfts')}
                style={{
                  borderBottom: `${
                    selectedTab === 'nfts' ? '2px solid black' : ''
                  }`
                }}
              >
                NFTs
              </p>
              <p
                onClick={() => setSelectedTab('description')}
                style={{
                  borderBottom: `${
                    selectedTab === 'description' ? '2px solid black' : ''
                  }`
                }}
              >
                Description
              </p>
              <p
                onClick={() => setSelectedTab('activity')}
                style={{
                  borderBottom: `${
                    selectedTab === 'activity' ? '2px solid black' : ''
                  }`
                }}
              >
                Activity
              </p>
            </div>
            {selectedTab === 'nfts' && (
              <select name='' id=''>
                <option value=''>Date Minted - Newest</option>
                <option value=''>Date Minted - Oldest</option>
                <option value=''>Price - Highest</option>
                <option value=''>Price - Lowest</option>
              </select>
            )}
            <div className='singleCollection__bottomBottomInfo'>
              {selectedTab === 'nfts' && (
                <Row xs={1} sm={2} md={3} xxl={4} className='g-4'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <NFTCard key={item} isLive={false} />
                  ))}
                </Row>
              )}
              {selectedTab === 'description' && (
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  necessitatibus excepturi ipsa odio mollitia laudantium
                  expedita officia accusantium, nihil ipsum facere, ratione
                  explicabo culpa voluptas, sunt cupiditate. Cumque cum ducimus
                  ipsa magnam suscipit magni accusantium distinctio expedita
                  debitis itaque, alias at aut officia, unde provident
                  exercitationem ipsam, dolorem eum labore?
                </p>
              )}
              {selectedTab === 'activity' && (
                <>
                  <h4>Sales history</h4>
                  <Table borderless>
                    <thead>
                      <tr>
                        <th>Artwork</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3].map((item) => (
                        <tr key={item}>
                          <td>
                            <Link
                              to='/nft_details'
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              <img
                                src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                                alt=''
                              />
                              <p>In.Visible</p>
                            </Link>
                          </td>
                          <td>
                            <UserPopover />
                          </td>
                          <td>
                            <UserPopover />
                          </td>
                          <td>
                            <Link
                              to='/nft_details'
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              <p>Buy Now</p>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to='/nft_details'
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              <p>0.1 ETH</p>
                            </Link>
                          </td>
                          <td>
                            <Link
                              to='/nft_details'
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              <p>12 days ago</p>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCollection;
