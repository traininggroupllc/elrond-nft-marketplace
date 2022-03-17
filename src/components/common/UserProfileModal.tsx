import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';

interface Props {
  modalType?: string;
  handleCloseModal: () => void;
  handelModalType: (modalType: string) => void;
  modalOpen: boolean;
}

const UserProfileModal = ({
  modalType,
  handleCloseModal,
  handelModalType,
  modalOpen
}: Props) => {
  const [hover, setHover] = useState<number | null>();
  const [hoverDiv, setHoverDiv] = useState<number | null>();

  const closeSvg = (
    <svg
      onClick={handleCloseModal}
      style={{ marginRight: '15px', cursor: 'pointer' }}
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
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </svg>
  );

  return (
    <Popup
      overlayStyle={{ background: '#000000e8' }}
      contentStyle={{
        width: '100vh',
        height: '100vh',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClose={handleCloseModal}
      open={modalOpen}
      modal
      lockScroll
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '760px',
          height: '600px',
          margin: '0 25px',
          overflow: 'hidden',
          borderRadius: '10px'
        }}
        className='userProfileModal'
      >
        {modalType === 'createdBy' ? (
          <div
            style={{
              borderBottom: '1px solid lightgray',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <p
              style={{
                fontSize: '16px',
                fontWeight: '600',
                padding: '15px 0',
                margin: '0 20px',
                width: 'fit-content',
                borderBottom: '2px solid black',
                cursor: 'pointer'
              }}
            >
              Created by
            </p>
            {closeSvg}
          </div>
        ) : (
          <div
            style={{
              borderBottom: '1px solid lightgray',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', height: '100%' }}>
              <p
                onClick={() => handelModalType('following')}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '15px 0',
                  margin: '0 20px',
                  width: 'fit-content',
                  borderBottom: `${
                    modalType === 'following' ? '2px solid black' : 'none'
                  }`,
                  cursor: 'pointer'
                }}
              >
                Following
              </p>
              <p
                onClick={() => handelModalType('followers')}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: '15px 0',
                  margin: '0 20px',
                  width: 'fit-content',
                  borderBottom: `${
                    modalType === 'followers' ? '2px solid black' : 'none'
                  }`,
                  cursor: 'pointer'
                }}
              >
                Followers
              </p>
            </div>
            {closeSvg}
          </div>
        )}

        <div
          style={{
            overflow: 'hidden',
            overflowY: 'scroll',
            height: '100%',
            padding: '20px',
            paddingBottom: '80px'
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              onMouseOver={() => setHoverDiv(item)}
              onMouseOut={() => setHoverDiv(null)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${window.screen.width < 640 ? '5px' : '20px'}`,
                backgroundColor: `${hoverDiv === item ? '#f5f5f5' : 'white'}`,
                borderRadius: '10px'
              }}
              key={item}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  style={{
                    height: `${window.screen.width < 640 ? '32px' : '50px'}`,
                    width: `${window.screen.width < 640 ? '32px' : '50px'}`,
                    borderRadius: '50%',
                    marginRight: `${
                      window.screen.width < 640 ? '20px' : '30px'
                    }`
                  }}
                  src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt=''
                />
                <div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: `${
                        window.screen.width < 640 ? '18px' : '24px'
                      }`,
                      fontWeight: '600'
                    }}
                  >
                    kirito
                  </p>
                  <p
                    style={{
                      margin: '0',
                      width: 'fit-content',
                      fontSize: `${
                        window.screen.width < 640 ? '16px' : '18px'
                      }`,
                      fontWeight: '600',
                      background: `linear-gradient(
        to right,
        green 2%,
        orange 20%,
        red 40%,
        #ff4967 60%,
        blue 80%,
        aqua 100%
      )`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    @kirito
                  </p>
                </div>
              </div>
              <Button
                onMouseOver={() => setHover(item)}
                onMouseOut={() => setHover(null)}
                style={{
                  display: `${window.screen.width < 640 ? 'none' : 'block'}`,
                  height: '50px',
                  borderRadius: '30px',
                  padding: '0 25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  outline: 'none',
                  border: '2px solid lightgray'
                }}
                variant={hover === item ? 'dark' : 'light'}
              >
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default UserProfileModal;
