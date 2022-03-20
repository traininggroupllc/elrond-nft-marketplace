import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { PopupPosition } from 'reactjs-popup/dist/types';
import UserProfileModal from './UserProfileModal';

interface Props {
  imageOnly?: boolean;
  position?: PopupPosition;
}

const UserNavPopover = ({ imageOnly, position }: Props) => {
  const [hover, setHover] = useState(false);
  const [mouseOver, setMouseOver] = useState('');
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <div className='nftPopover'>
      <Popup
        trigger={
          <div>
            {imageOnly ? (
              <img
                style={{ cursor: 'pointer' }}
                src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                alt='created_by'
              />
            ) : (
              <Button variant='light'>
                <img
                  src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt='created_by'
                />
                <p>@rozumnyib</p>
              </Button>
            )}
          </div>
        }
        {...(!popupOpen && { open: false })}
        position={position ? position : 'bottom center'}
        on={['hover', 'focus']}
        onOpen={() => setPopupOpen(true)}
        arrow={false}
        nested
        closeOnDocumentClick
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
            <div>
              <img
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%'
                }}
                src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                alt='created_by'
              />
            </div>

            <Button
              style={{
                height: '45px',
                borderRadius: '30px',
                padding: '0 20px',
                border: '2px solid lightgray',
                fontWeight: '600',
                outline: 'none'
              }}
              variant={hover ? 'dark' : 'light'}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              Follow
            </Button>
          </div>
          <div>demo text</div>
        </div>
      </Popup>
    </div>
  );
};

export default UserNavPopover;
