import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NFTCard from 'components/common/NFTCard';

const Activity = () => {
  return (
    <div className='activity container-xl'>
      <h1>Activity</h1>
      {true ? (
        <div className='activity__details'>
          <div>
            <p>Trending auction</p>
            <Link to='/profiles'>
              <p>View all action</p>
            </Link>
          </div>
          <Row xs={1} sm={2} md={3} xxl={4} className='g-4'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <NFTCard isLive={false} key={item} />
            ))}
          </Row>
        </div>
      ) : (
        <div className='activity__empty'>
          <h4>No activity show yet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            totam?
          </p>
        </div>
      )}
    </div>
  );
};

export default Activity;
