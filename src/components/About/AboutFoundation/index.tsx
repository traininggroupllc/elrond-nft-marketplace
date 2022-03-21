import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AboutFoundationTextCenter from '../../../assets/img/textImage/about-foundation-centered.svg';
import AboutFoundationText from '../../../assets/img/textImage/about-foundation.svg';
import MakeHistoryCenterText from '../../../assets/img/textImage/making-history-centered.svg';
import MakeHistoryText from '../../../assets/img/textImage/making-history.svg';

const AboutFoundation = () => {
  return (
    <div>
      <div>
        <div className='d-md-block d-none'>
          <img
            className='img-fluid'
            src={AboutFoundationText}
            alt='about foundation'
          />
        </div>
        <div className='d-block d-md-none'>
          <div className='d-flex justify-content-center'>
            <img
              className='img-fluid'
              src={AboutFoundationTextCenter}
              alt='about foundation'
            />
          </div>
        </div>
      </div>
      <Row className='mt-4'>
        <Col md={6}>
          <p className='text-dark fs-3'>
            Foundation is a platform that aims to build a new creative economy—a
            world where creators can use the Ethereum blockchain to value their
            work in entirely new ways, and build stronger connections with their
            supporters.
          </p>
        </Col>
      </Row>
      {/* marquee text */}
      <marquee
        className='about__foundation--marquee'
        width='100%'
        direction='left'
        height='100%'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </marquee>

      <Row className='mt-4'>
        <Col md={6}>
          <p className='text-dark fs-3'>
            Foundation fosters a network of mutual support between creators and
            collectors. We’re forging a community-driven path and sharing our
            tools with the rapidly evolving group of developers who are excited
            to define this future with us. We want anyone and everyone who cares
            about the future of digital expression to be a part of it.
          </p>
        </Col>
      </Row>

      {/* make history */}
      <div className='my-5 py-4'>
        <div>
          <div className='d-md-block d-none'>
            <img
              className='img-fluid'
              src={MakeHistoryText}
              alt='make history'
            />
          </div>
          <div className='d-block d-md-none'>
            <div className='d-flex justify-content-center'>
              <img
                className='img-fluid'
                src={MakeHistoryCenterText}
                alt='make history'
              />
            </div>
          </div>
        </div>
        <Row className='my-5'>
          <Col md={6}>
            <p className='text-dark fs-1'>
              Since launching in February 2021, creators have earned...
            </p>
            <p className='text-dark make__history--eth__title'>
              56,&nbsp;239&nbsp;ETH
            </p>
            <p className='text-secondary fs-4'>$163,963,742.72</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutFoundation;
