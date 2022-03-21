import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NFTCard from 'components/common/NFTCard';

const Feed = () => {
  const [accept, setAccept] = useState(false);
  return (
    <>
      <div className='feed container-xl'>
        <h4>Follow at least five creator to build your feed</h4>
        <div>
          <div>
            <p>Featured creator</p>
            <Link to='/profiles'>
              <p>View all creator</p>
            </Link>
          </div>
          <Row xs={1} sm={2} md={3} xxl={4} className='g-4'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <NFTCard key={item} />
            ))}
          </Row>
        </div>
      </div>
      {!accept && (
        <div className='feed__drawer'>
          <div className='container-xl'>
            <div>
              <p>0/5</p>
              <p>Follow at least 5 creators to continue</p>
            </div>
            <div>
              <p>
                As of March 8, 2022 we have updated our{' '}
                <span>Terms of Service</span> and <span>Privacy Policy</span>
              </p>
              <Button onClick={() => setAccept(true)} variant='light'>
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
