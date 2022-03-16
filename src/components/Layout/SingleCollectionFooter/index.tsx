import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const data = {
  left: ['Instagram', 'Twitter', 'Blog'],
  right: [
    'About',
    'Press',
    'Careers',
    'Community Guidelines',
    'Terms of Service',
    'Privacy',
    'Help'
  ]
};

const SingleCollectionFooter = () => {
  return (
    <Container fluid>
      <Row className='collection__footer'>
        <Col xs={4} sm={4} md={4} lg={4}>
          <ul className='footer__link'>
            <svg
              fill='none'
              viewBox='0 0 98 33'
              xmlns='http://www.w3.org/2000/svg'
              style={{ display: 'block' }}
            >
              <path
                clipRule='evenodd'
                d='M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 0 1 1.358 0L35.056 30.66a.784.784 0 0 1-.679 1.176H.785a.784.784 0 0 1-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z'
                fill='currentColor'
                fillRule='evenodd'
              ></path>
            </svg>

            {data.left.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <ul className='footer__link'>
            {data.right.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCollectionFooter;
