import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import FeaturedCard from 'components/Card/FeaturedCard';
import NFTCard from 'components/common/NFTCard';

const UserProfile = () => {
  const [collectionOrCreated, setCollectionOrCreated] = useState('collection');

  const commonDiv = (
    <div className='userProfile__topAddress'>
      <p>
        <span>#19543</span>
        <span>0x8EFS...14A2</span>
        <Popup
          trigger={
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
              <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
              <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
            </svg>
          }
          position='top center'
          on={['hover']}
          arrow={false}
        >
          <p
            style={{
              backgroundColor: 'black',
              padding: '5px 10px',
              borderRadius: '20px',
              fontSize: '16px',
              color: 'white',
              fontWeight: '600'
            }}
          >
            Copy address
          </p>
        </Popup>
      </p>
      <p>Orange Sekaii</p>
      <p>@orangeseakii</p>
    </div>
  );

  return (
    <div className='container-lg userProfile'>
      <div className='userProfile__top'>
        <img
          src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
          alt=''
        />
        {commonDiv}
        <div className='userProfile__topCollected'>
          <p>Collected by</p>
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              key={item}
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt=''
            />
          ))}
          <p>View all</p>
        </div>
      </div>
      <div className='userProfile__bottom'>
        <div className='userProfile__bottomFollower'>
          {commonDiv}
          <div>
            <div>
              <p>123</p>
              <p>Followers</p>
            </div>
            <div>
              <p>342</p>
              <p>Following</p>
            </div>
            <Button variant='light'>Follow</Button>
          </div>
          <div>
            <p>Followed by</p>
            <div>
              {[1, 2, 3, 4, 5].map((item) => (
                <img
                  key={item}
                  src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt=''
                />
              ))}
            </div>
            <p>View all</p>
          </div>
        </div>
        <div className='userProfile__bottomColCre'>
          <div>
            <p
              style={{
                borderBottom: `${
                  collectionOrCreated === 'collection'
                    ? '2px solid black'
                    : 'none'
                }`
              }}
              onClick={() => setCollectionOrCreated('collection')}
            >
              Collections <span>2</span>
            </p>
            <p
              style={{
                borderBottom: `${
                  collectionOrCreated === 'created' ? '2px solid black' : 'none'
                }`
              }}
              onClick={() => setCollectionOrCreated('created')}
            >
              Created <span>5</span>
            </p>
          </div>
          <div>
            {collectionOrCreated === 'collection' && (
              <Row xs={1} sm={2} md={1} lg={2} xxl={3} className='g-4'>
                {[1, 2].map((item) => (
                  <FeaturedCard key={item} />
                ))}
              </Row>
            )}
            {collectionOrCreated === 'created' && (
              <Row xs={1} sm={2} md={1} lg={2} xxl={3} className='g-4'>
                {[1, 2, 3, 4, 5].map((item) => (
                  <NFTCard key={item} />
                ))}
              </Row>
            )}
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UserProfile;
