import React from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';

const NFTPopover = () => {
  return (
    <div className='nftPopover'>
      <Popup
        trigger={
          <Button variant='light'>
            <img
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <p>@rozumnyib</p>
          </Button>
        }
        position='bottom center'
        on={['hover', 'focus']}
        arrow={false}
      >
        <div
          style={{
            width: '350px',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            marginTop: '10px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}
          >
            <img
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <Button
              style={{
                height: '45px',
                borderRadius: '30px',
                padding: '0 20px'
              }}
              variant='light'
            >
              Follow
            </Button>
          </div>
          <div>
            <h3 style={{ fontSize: '36px' }}>Rinatto</h3>
            <p
              style={{
                fontSize: '20px',
                fontWeight: '600',
                background: `linear-gradient(
        to right,
        green 0%,
        orange 2%,
        red 4%,
        #ff4967 20%,
        blue 40%,
        aqua 100%
      )`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              @Lbank
            </p>
            <p style={{ fontSize: '16px' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              at! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, debitis.
            </p>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
          >
            <p
              style={{
                margin: '0',
                fontSize: '14px',
                fontWeight: '600',
                marginRight: '10px'
              }}
            >
              Followed by{' '}
            </p>
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '3px solid white'
              }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '3px solid white',
                marginLeft: '-8px'
              }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '3px solid white',
                marginLeft: '-8px'
              }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '3px solid white',
                marginLeft: '-8px'
              }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '3px solid white',
                marginLeft: '-8px'
              }}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt='created_by'
            />
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '40px'
            }}
          >
            <div style={{ marginRight: '15px' }}>
              <p style={{ fontSize: '24px', fontWeight: '600', margin: '0' }}>
                80
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0',
                  color: '#666666'
                }}
              >
                Following
              </p>
            </div>
            <div>
              <p style={{ fontSize: '24px', fontWeight: '600', margin: '0' }}>
                200
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0',
                  color: '#666666'
                }}
              >
                Followers
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default NFTPopover;
