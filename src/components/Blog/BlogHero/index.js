import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BlogHero = () => {
  return (
    <div className='my-5'>
      <Card className='blog__card--hero'>
        <Row>
          <Col lg={5}>
            <Card.Img
              variant='top'
              src='https://en.cryptonomist.ch/wp-content/uploads/2021/03/NFT-market-crypto-1.jpg'
            />
          </Col>
          <Col lg={7} className='d-flex flex-column'>
            <Card.Body>
              <Card.Title>
                Artist Invite: Jimmy Edgar <br /> & Pilar Zeta
              </Card.Title>
              <Card.Text className='mt-5'>
                The collaborative artistic force connects <br /> the dots
                between their individual practices.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p>Published 1 February 2022</p>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BlogHero;
