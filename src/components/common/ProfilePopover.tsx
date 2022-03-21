import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { PopupPosition } from 'reactjs-popup/dist/types';

interface Props {
  position?: PopupPosition;
  handelWalletConnect?: () => void;
  isProfile?: boolean;
}

const rightArrow = (
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
    style={{ color: 'gray' }}
  >
    <polyline points='9 18 15 12 9 6' />
  </svg>
);

const ProfilePopover = ({
  position,
  handelWalletConnect,
  isProfile
}: Props) => {
  return (
    <Popup
      trigger={
        isProfile ? (
          <img
            style={{ cursor: 'pointer' }}
            src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
            alt='created_by'
          />
        ) : (
          <h4>Explore</h4>
        )
      }
      position={position ? position : 'bottom center'}
      arrow={false}
      nested
      closeOnDocumentClick
    >
      <div
        style={{
          width: '320px',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '8px',
          marginTop: '30px',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        {isProfile ? (
          <>
            <Link to='/user_profile' style={{ color: 'black' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    style={{
                      cursor: 'pointer',
                      height: '40px',
                      width: '40px',
                      borderRadius: '50%',
                      marginRight: '10px'
                    }}
                    src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                    alt='created_by'
                  />
                  <p
                    style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}
                  >
                    Profile
                  </p>
                </div>
                {rightArrow}
              </div>
            </Link>
            <div
              style={{
                border: '1px solid lightgray',
                padding: '10px',
                borderRadius: '8px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                  borderBottom: '1px solid lightgray'
                }}
              >
                <div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '14px',
                      color: '#666666',
                      fontWeight: '600'
                    }}
                  >
                    Balance
                  </p>
                  <input
                    style={{
                      width: '100px',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'lightgray',
                      borderRadius: '4px',
                      height: '30px',
                      marginTop: '5px'
                    }}
                    type='text'
                  />
                </div>
                <p
                  style={{
                    margin: '0',
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: '#f5f5f5',
                    height: 'fit-content',
                    padding: '3px 5px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Wrong network
                  <Spinner
                    style={{ marginLeft: '5px' }}
                    animation='grow'
                    variant='danger'
                    size='sm'
                  />
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '10px'
                }}
              >
                <div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '14px',
                      color: '#666666',
                      fontWeight: '600'
                    }}
                  >
                    Offer Balance
                  </p>
                  <input
                    style={{
                      width: '100px',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'lightgray',
                      borderRadius: '4px',
                      height: '30px',
                      marginTop: '5px'
                    }}
                    type='text'
                  />
                </div>
                {rightArrow}
              </div>
            </div>
            <Link to='/settings' style={{ color: 'black' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <circle cx='12' cy='12' r='3' />
                    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
                  </svg>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginLeft: '10px'
                    }}
                  >
                    Settings
                  </p>
                </div>
                {rightArrow}
              </div>
            </Link>
            <Link to='/help' style={{ color: 'black' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <circle cx='12' cy='12' r='10' />
                    <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                    <line x1='12' y1='17' x2='12.01' y2='17' />
                  </svg>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginLeft: '10px'
                    }}
                  >
                    Help
                  </p>
                </div>
                {rightArrow}
              </div>
            </Link>
            <div
              onClick={handelWalletConnect}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 0',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
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
                  <path d='M18.36 6.64a9 9 0 1 1-12.73 0' />
                  <line x1='12' y1='2' x2='12' y2='12' />
                </svg>
                <p
                  style={{
                    margin: '0',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginLeft: '10px'
                  }}
                >
                  Disconnect
                </p>
              </div>
              {rightArrow}
            </div>
          </>
        ) : (
          <>
            <Link to='/collections' style={{ color: 'black', outline: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' />
                  </svg>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginLeft: '10px'
                    }}
                  >
                    Collections
                  </p>
                </div>
                {rightArrow}
              </div>
              <Link to='/nfts' style={{ color: 'black', outline: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
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
                      <polyline points='23 6 13.5 15.5 8.5 10.5 1 18' />
                      <polyline points='17 6 23 6 23 12' />
                    </svg>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginLeft: '10px'
                      }}
                    >
                      Trending
                    </p>
                  </div>
                  {rightArrow}
                </div>
              </Link>
              <Link to='/nfts' style={{ color: 'black', outline: 'none' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
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
                      <rect x='3' y='3' width='7' height='7' />
                      <rect x='14' y='3' width='7' height='7' />
                      <rect x='14' y='14' width='7' height='7' />
                      <rect x='3' y='14' width='7' height='7' />
                    </svg>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginLeft: '10px'
                      }}
                    >
                      Browse
                    </p>
                  </div>
                  {rightArrow}
                </div>
              </Link>
            </Link>
          </>
        )}
      </div>
    </Popup>
  );
};

export default ProfilePopover;
