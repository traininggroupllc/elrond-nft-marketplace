import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserPopover from '../../components/common/UserPopover';

const NFTDetailsCommonBtn = () => {
  return (
    <>
      <div className='nftDetails__commonBtn'>
        <div>
          <p>Reserve</p>
          <h1>1.00 ETH</h1>
          <p className='nftDetails__commonBtnLive'>
            <Spinner animation='grow' variant='light' size='sm' /> LIVE{' '}
            <span>6h : 38m : 11s</span>
          </p>
          <Link to='/bid'>
            <Button variant='dark'>Place bid</Button>
          </Link>
        </div>
        <div>
          <div>
            <p>Last sold</p>
            <h4>0.30 ETH</h4>
          </div>
          <div>
            <Button variant='light'>Make Offer</Button>
          </div>
        </div>
      </div>
      <div className='nftDetails__commonBtnBottom'>
        <p>Owned by</p>
        <UserPopover />
      </div>
    </>
  );
};

export default NFTDetailsCommonBtn;
