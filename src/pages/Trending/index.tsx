import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import UserPopover from 'components/common/UserPopover';
import Featured from '../../components/Card/FeaturedCard';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [duration, setDuration] = useState('1d');
  const [selectedTab, setSelectedTab] = useState('creators');

  const handleDuration = (dur: string) => {
    setDuration(dur);
  };

  const handleTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className='trending container-xl'>
      <div className='trending__title'>
        <h3>Trending Creators</h3>
        <div className='trending__duration'>
          <p
            onClick={() => handleDuration('1d')}
            className={duration === '1d' ? 'trending__durationSelected' : ''}
          >
            1d
          </p>
          <p
            onClick={() => handleDuration('7d')}
            className={duration === '7d' ? 'trending__durationSelected' : ''}
          >
            7d
          </p>
          <p
            onClick={() => handleDuration('30d')}
            className={duration === '30d' ? 'trending__durationSelected' : ''}
          >
            30d
          </p>
          <p
            onClick={() => handleDuration('all')}
            className={duration === 'all' ? 'trending__durationSelected' : ''}
          >
            All Time
          </p>
        </div>
        <div className='trending__tab'>
          <div className='trending__tabTab'>
            <p
              style={{
                borderBottom: `${
                  selectedTab === 'creators' ? '2px solid black' : ''
                }`
              }}
              onClick={() => handleTab('creators')}
            >
              Creators
            </p>
            <p
              style={{
                borderBottom: `${
                  selectedTab === 'collectors' ? '2px solid black' : ''
                }`
              }}
              onClick={() => handleTab('collectors')}
            >
              Collectors
            </p>
            <p
              style={{
                borderBottom: `${
                  selectedTab === 'collections' ? '2px solid black' : ''
                }`
              }}
              onClick={() => handleTab('collections')}
            >
              Collections
            </p>
          </div>
          <div className='trending__tabDuration'>
            <p
              onClick={() => handleDuration('1d')}
              className={duration === '1d' ? 'trending__durationSelected' : ''}
            >
              1d
            </p>
            <p
              onClick={() => handleDuration('7d')}
              className={duration === '7d' ? 'trending__durationSelected' : ''}
            >
              7d
            </p>
            <p
              onClick={() => handleDuration('30d')}
              className={duration === '30d' ? 'trending__durationSelected' : ''}
            >
              30d
            </p>
            <p
              onClick={() => handleDuration('all')}
              className={duration === 'all' ? 'trending__durationSelected' : ''}
            >
              All Time
            </p>
          </div>
        </div>
        <Table borderless>
          <thead>
            <tr>
              <th>Rank</th>
              {selectedTab === 'creators' && (
                <>
                  <th className='trending__deskTh'>Unique Collectors</th>
                  <th className='trending__deskTh'>NFTs Sold</th>
                  <th className='trending__deskTh trending__deskThRight'>
                    Primary Sales
                  </th>
                  <th className='trending__deskTh trending__deskThRight'>
                    Secondary Sales
                  </th>
                </>
              )}
              {selectedTab === 'collectors' && (
                <>
                  <th className='trending__deskTh'>Creators Supported</th>
                  <th className='trending__deskTh'>NFTs Bought</th>
                </>
              )}
              {selectedTab === 'collections' && (
                <>
                  <th className='trending__deskTh'>Owners</th>
                  <th className='trending__deskTh'>NFTs Sold</th>
                  <th className='trending__deskTh trending__deskThRight'>
                    Primary Sales
                  </th>
                  <th className='trending__deskTh trending__deskThRight'>
                    Secondary Sales
                  </th>
                </>
              )}
              <th className='trending__deskTh trending__deskThDark'>
                Total Sales
              </th>
              <th className='trending__mobileTh'>
                {(selectedTab === 'creators' ||
                  selectedTab === 'collections') && (
                  <select name='' id=''>
                    <option value=''>Owners</option>
                    <option value=''>NFTs Sold</option>
                    <option value=''>Primary Sales</option>
                    <option value=''>Secondary Sales</option>
                    <option value=''>Total Volume</option>
                  </select>
                )}
                {selectedTab === 'collectors' && (
                  <select name='' id=''>
                    <option value=''>Creators Supported</option>
                    <option value=''>NFTs Bought</option>
                    <option value=''>Total Spent</option>
                  </select>
                )}
              </th>
            </tr>
          </thead>
          <br />
          <br />
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <>
                <tr key={item}>
                  <td>
                    <Link
                      to={
                        selectedTab === 'collections'
                          ? '/single_collection'
                          : '/user_profile'
                      }
                    >
                      <p>#1</p>
                      <div>
                        {selectedTab === 'collections' ? (
                          <Popup
                            trigger={
                              <Link to='/single_collection'>
                                <img
                                  className='trending__collectionImg'
                                  src='https://f8n-production.imgix.net/collections/v0451l09m-000053.JPG?q=50&w=28&h=28&auto=format%2Ccompress&fit=crop&dpr=2'
                                  alt='collection'
                                />
                              </Link>
                            }
                            position='bottom left'
                            on={['hover', 'focus']}
                            arrow={false}
                          >
                            <div
                              style={{
                                width: '350px',
                                marginTop: '10px',
                                outline: 'none'
                              }}
                            >
                              <Featured isCollection={true} />
                            </div>
                          </Popup>
                        ) : (
                          <UserPopover
                            position='bottom left'
                            imageOnly={true}
                          />
                        )}
                        <div>
                          <p>Basqkek</p>
                          <p>@Basqkek</p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  {(selectedTab === 'creators' ||
                    selectedTab === 'collections') && (
                    <>
                      <td className='trending__deskTd'>
                        <Link
                          to={
                            selectedTab === 'collections'
                              ? '/single_collection'
                              : '/user_profile'
                          }
                        >
                          <p>1</p>
                        </Link>
                      </td>
                      <td className='trending__deskTd'>
                        <Link
                          to={
                            selectedTab === 'collections'
                              ? '/single_collection'
                              : '/user_profile'
                          }
                        >
                          <p>1</p>
                        </Link>
                      </td>
                      <td className='trending__deskTd trending__deskTdRight'>
                        <Link
                          to={
                            selectedTab === 'collections'
                              ? '/single_collection'
                              : '/user_profile'
                          }
                        >
                          <p>2.10 ETH</p>
                          <p>$6347.59</p>
                        </Link>
                      </td>
                      <td className='trending__deskTd trending__deskTdRight'>
                        <Link
                          to={
                            selectedTab === 'collections'
                              ? '/single_collection'
                              : '/user_profile'
                          }
                        >
                          <p>0 ETH</p>
                          <p>$0.00</p>
                        </Link>
                      </td>
                    </>
                  )}
                  {selectedTab === 'collectors' && (
                    <>
                      <td className='trending__deskTd'>
                        <Link to='/user_profile'>
                          <p>5</p>
                        </Link>
                      </td>
                      <td className='trending__deskTd'>
                        <Link to='/user_profile'>
                          <p>5</p>
                        </Link>
                      </td>
                    </>
                  )}
                  <td>
                    <Link
                      to={
                        selectedTab === 'collections'
                          ? '/single_collection'
                          : '/user_profile'
                      }
                    >
                      <p>2.10 ETH</p>
                      <p>$6347.59</p>
                    </Link>
                  </td>
                </tr>
                <br />
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Trending;
