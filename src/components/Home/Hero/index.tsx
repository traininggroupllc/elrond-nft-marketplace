import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import UserPopover from 'components/common/UserPopover';
import NftLargeImg from '../../../assets/img/nft-img/nft-large.gif';
import Featured from '../../../components/Card/FeaturedCard';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__imageSection'>
        <img className='hero__image' src={NftLargeImg} alt='hero_image' />
      </div>
      <div className='hero__details'>
        <h1 className='hero__detailsTitle'>robe</h1>
        <div className='hero__detailsTop'>
          <div className='hero__detailsCreatedBy'>
            <p className='hero__detailsCreatedByTitle'>Created by</p>
            <UserPopover />
          </div>
          <div className='hero__detailsCollection'>
            <p className='hero__detailsCollectionTitle'>Collection</p>
            <Popup
              trigger={
                <Link to='/single_collection'>
                  <Button variant='light'>
                    <img
                      src='https://f8n-production.imgix.net/collections/v0451l09m-000053.JPG?q=50&w=28&h=28&auto=format%2Ccompress&fit=crop&dpr=2'
                      alt='collection'
                    />
                    <p>Marks on my soul</p>
                  </Button>
                </Link>
              }
              position='bottom right'
              on={['hover', 'focus']}
              arrow={false}
            >
              <div
                style={{
                  width: '350px',
                  marginTop: '10px'
                }}
              >
                <Featured isCollection={true} />
              </div>
            </Popup>
          </div>
        </div>

        <div className='hero__detailsBottom'>
          <div className='hero__detailsBottomCurrentBid'>
            <p>Current bid</p>
            <p>0.12 ETH</p>
            <p>$305.69</p>
          </div>
          <div className='hero__detailsBottomEndsIn'>
            <p className='hero__detailsBottomEndsInTitle'>Auction ends in</p>
            <div>
              <div>
                <p>15</p>
                <p>hours</p>
              </div>
              <div>
                <p>38</p>
                <p>minutes</p>
              </div>
              <div>
                <p>41</p>
                <p>seconds</p>
              </div>
            </div>
          </div>
        </div>
        <Button className='hero__detailsButton'>View NFT</Button>
      </div>
    </div>
  );
};

export default Hero;
