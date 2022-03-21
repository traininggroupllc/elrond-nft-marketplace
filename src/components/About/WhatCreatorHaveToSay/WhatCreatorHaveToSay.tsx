import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import WhatCreatorHaveToSayCenter from '../../../assets/img/textImage/what-creators-have-to-say-centered.svg';
import WhatCreatorHaveToSayImg from '../../../assets/img/textImage/what-creators-have-to-say.svg';

const WhatCreatorHaveToSay = () => {
  return (
    <div>
      <div>
        <div className='d-md-block d-none'>
          <img
            className='img-fluid'
            src={WhatCreatorHaveToSayImg}
            alt='about foundation'
          />
        </div>
        <div className='d-block d-md-none'>
          <div className='d-flex justify-content-center'>
            <img
              className='img-fluid'
              src={WhatCreatorHaveToSayCenter}
              alt='about foundation'
            />
          </div>
        </div>
      </div>

      {/* comment card section */}
      <Row xs={1} md={2} className='g-3 mt-5 pt-4'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className='what__creator--have__to--say__card'>
              <Card.Body>
                <p className='fs-3 what__creator--have__to--say__card--rotate__text'>
                  Alejandro Cartagena
                </p>
                <Card.Text className='fs-5 text-dark'>
                  “My advice is: do something that is totally you. Try to
                  capture and mint what is already inside you. This is the
                  history I grew up listening to, learning at school,
                  celebrating every year. I am a child of Ethiopian patriots,
                  and this is what I was born to create.”
                </Card.Text>
                <div className='what__creator--have__to--say__card--user'>
                  <div className='what__creator--have__to--say__card--user__img'>
                    <img
                      className='img-fluid'
                      src='https://f8n-production.imgix.net/creators/profile/iyypf121g-yatreda-foundation-profile-jpg-mpkrhc.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                      alt=''
                    />
                    <p>@AlejandroCartagena</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhatCreatorHaveToSay;
