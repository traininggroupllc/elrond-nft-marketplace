import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HowItWorkMobileImg from '../../../assets/img/textImage/how-it-works-mobile.svg';
import HowItWorkImg from '../../../assets/img/textImage/how-it-works.svg';

const HowItworks = () => {
  return (
    <div className='mt-5 pt-5'>
      <div>
        <div className='d-md-block d-none'>
          <img
            className='img-fluid'
            src={HowItWorkImg}
            alt='about foundation'
          />
        </div>
        <div className='d-block d-md-none'>
          <div className='d-flex justify-content-center'>
            <img
              className='img-fluid'
              src={HowItWorkMobileImg}
              alt='about foundation'
            />
          </div>
        </div>
      </div>

      {/* card section */}
      <Row xs={1} md={2} className='g-5 mt-5 pt-4'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <div>
              <h1 className='fw-normal text-dark mb-4'>For Creators</h1>
              <p className='fs-3 text-dark'>
                Creators are invited to join Foundation by members of the
                community. Once you’ve received an invite, you’ll need to set up
                a wallet with ETH before you can create an artist profile,
                deploy a smart contract, and mint an NFT—which means uploading
                your NFT file to IPFS, a decentralized peer-to-peer storage
                network. You can then add any of your works to Foundation’s
                marketplace.
              </p>
              <p className='fs-3 text-dark'>
                If the piece is resold on the secondary market, a 10% royalty
                goes to the wallet that originally minted the NFT—in perpetuity.
              </p>
              <a
                className='text-secondary how__it--work__link'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
              >
                Read a complete guide to selling NFTs on Foundation
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItworks;
