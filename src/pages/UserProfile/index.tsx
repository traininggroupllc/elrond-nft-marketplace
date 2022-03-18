import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import FeaturedCard from 'components/Card/FeaturedCard';
import NFTCard from 'components/common/NFTCard';
import UserPopover from 'components/common/UserPopover';
import UserProfileModal from 'components/common/UserProfileModal';
import SingleCollectionNav from 'components/Layout/SingleCollectionNav';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [collectionOrCreated, setCollectionOrCreated] = useState('collection');
  const [address, setAddress] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleAddressCopy = () => {
    setAddress('address');
    setTimeout(() => {
      setAddress('');
    }, 3000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType('');
  };

  const handelModalOpen = (type: string) => {
    setModalOpen(true);
    setModalType(type);
  };

  const handelModalType = (type: string) => {
    setModalType(type);
  };

  const commonDiv = (
    <div className='userProfile__topAddress'>
      <p>
        <span>#19543</span>
        <span>0x8EFS...14A2</span>
        <Popup
          trigger={
            address ? (
              <svg
                style={{ color: 'green' }}
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
                <polyline points='20 6 9 17 4 12' />
              </svg>
            ) : (
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
                onClick={handleAddressCopy}
              >
                <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
                <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
              </svg>
            )
          }
          position='top center'
          on={['hover']}
          arrow={false}
        >
          {!address && (
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
          )}
        </Popup>
      </p>
      <p>Orange Sekaii</p>
      <p>@orangeseakii</p>
    </div>
  );

  return (
    <>
      <div className='userProfile__nav'>
        <SingleCollectionNav />
      </div>
      <div className='container-xl userProfile'>
        <div className='userProfile__top'>
          <img
            src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
            alt=''
          />
          {commonDiv}
          <div
            onClick={() => handelModalOpen('createdBy')}
            className='userProfile__topCollected'
          >
            <p>Collected by</p>
            {[1, 2, 3, 4, 5].map((item) => (
              <UserPopover
                imageOnly={true}
                position={'bottom right'}
                key={item}
              />
            ))}
            <p>View all</p>
          </div>
        </div>
        <div className='userProfile__bottom'>
          <div className='userProfile__bottomFollower'>
            {commonDiv}
            <div>
              <div onClick={() => handelModalOpen('following')}>
                <p>342</p>
                <p>Following</p>
              </div>
              <div onClick={() => handelModalOpen('followers')}>
                <p>123</p>
                <p>Followers</p>
              </div>
              <Button variant='light'>Follow</Button>
            </div>
            <div>
              <p>Followed by</p>
              <div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <UserPopover
                    imageOnly={true}
                    position={'bottom left'}
                    key={item}
                  />
                ))}
              </div>
              <p onClick={() => handelModalOpen('followers')}>View all</p>
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
                    collectionOrCreated === 'created'
                      ? '2px solid black'
                      : 'none'
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
                    <NFTCard isLive={false} key={item} />
                  ))}
                </Row>
              )}
            </div>
          </div>
          <div className='userProfile__bottomBio'>
            <h3>Bio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              doloribus quam maiores culpa ullam. Eos totam ad mollitia minus
              non?
            </p>
          </div>
          <div className='userProfile__bottomTags'>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='50'
                height='50'
                viewBox='0 0 50 50'
                fill='#000000'
              >
                <path d='M45.103,24.995l3.195-6.245l-5.892-3.807l-0.354-7.006l-7.006-0.35l-3.81-5.89l-6.242,3.2l-6.245-3.196l-3.806,5.893	L7.938,7.948l-0.352,7.007l-5.89,3.81l3.2,6.242L1.702,31.25l5.892,3.807l0.354,7.006l7.006,0.35l3.81,5.891l6.242-3.2l6.245,3.195	l3.806-5.893l7.005-0.354l0.352-7.006l5.89-3.81L45.103,24.995z M22.24,32.562l-6.82-6.819l2.121-2.121l4.732,4.731l10.202-9.888	l2.088,2.154L22.24,32.562z'></path>
              </svg>
              @orangesekai1
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='#000000'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
              </svg>
            </p>
            <p>
              <span>ENS</span>orangesekaii.eth
            </p>
            <Link to='/user_profile'>
              <p>
                Invited by @seerlight{' '}
                <img
                  src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt=''
                />
              </p>
            </Link>
          </div>
          <div className='userProfile__bottomLinks'>
            <h3>Links</h3>
            <p>
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
                <path d='M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7' />
              </svg>
              Orangesekaii
            </p>
            <p>
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                xmlSpace='preserve'
              >
                <path d='M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z' />
              </svg>
              @Orangesekai
            </p>
            <p>
              <span>Joined</span>
              <span>March 2021</span>
            </p>
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
              position='bottom left'
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
          </div>
        </div>
        <UserProfileModal
          handleCloseModal={handleCloseModal}
          modalType={modalType}
          modalOpen={modalOpen}
          handelModalType={handelModalType}
        />
      </div>
    </>
  );
};

export default UserProfile;
