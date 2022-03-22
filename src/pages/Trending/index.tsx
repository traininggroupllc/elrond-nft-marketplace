import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

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
                  <th className='trending__deskTh'>Primary Sales</th>
                  <th className='trending__deskTh'>Secondary Sales</th>
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
                  <th className='trending__deskTh'>Primary Sales</th>
                  <th className='trending__deskTh'>Secondary Sales</th>
                </>
              )}
              <th className='trending__deskTh trending__deskThDark'>
                Total Sales
              </th>
              <th className='trending__mobileTh'>
                <select name='' id=''>
                  <option value=''>Owners</option>
                  <option value=''>NFTs Sold</option>
                  <option value=''>Primary Sales</option>
                  <option value=''>Secondary Sales</option>
                  <option value=''>Total Volume</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Trending;
