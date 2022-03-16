import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Bid = () => {
  return (
    <div className='container-lg bid'>
      <Row lg={2} md={1} sm={1} xs={1} className='justify-content-center mt-5'>
        <Col lg={8}>
          <div className='bid__top'>
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
              <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
              <line x1='12' y1='9' x2='12' y2='13' />
              <line x1='12' y1='17' x2='12.01' y2='17' />
            </svg>
            <p>Connext your wallet</p>
            <p>Please connect your wallet to continue with the transaction.</p>
            <Button variant='dark'>Connect Wallet</Button>
          </div>
        </Col>
        <Col lg={4}>
          <div className='bid__bottom'>
            <img
              src='https://f8n-ipfs-production.imgix.net/QmbuJYsBVpuAJqHKZr5C3VNTxkZdBf77SXjtzQkjkFVeDd/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680'
              alt=''
            />
            <div>
              <img
                src='https://f8n-production.imgix.net/collections/fnd.jpg?q=50&w=24&h=24&auto=format%2Ccompress&fit=crop&dpr=2&frame=1'
                alt=''
              />
              <h2>Analogue refraction</h2>
              <div>
                <img
                  src='https://f8n-production.imgix.net/collections/fnd.jpg?q=50&w=24&h=24&auto=format%2Ccompress&fit=crop&dpr=2&frame=1'
                  alt=''
                />
                <p>Foundation</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Bid;
