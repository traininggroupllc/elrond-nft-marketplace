import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import { RiShareBoxFill } from 'react-icons/ri';
import NavigationTab from 'components/SingleCollection/NavigationTab/NavigationTab';
import Featured from '../../components/Card/FeaturedCard';

const NFTs = [1, 2, 3, 4, 5, 6, 7, 8];

const index = () => {
  return (
    <section>
      <Container fluid className='single__collection'>
        <div className='top__content'>
          <img
            src='https://f8n-production.imgix.net/collections/hb8dlcndu-LOGO.png?q=50&w=160&h=160&auto=format%2Ccompress&fit=crop&dpr=2'
            alt=''
            className='profile__img'
          />
          <button>
            PIT
            <RiShareBoxFill className='icon' />
          </button>
          <h2>The Pit</h2>

          <div className='icon__link'>
            <div>
              <img
                src='https://f8n-production.imgix.net/creators/profile/baqfv8nrd-aye-gif-3ripzh.gif?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                alt=''
              />
            </div>
            <div>
              <h6>@LUCKYME</h6>
            </div>
          </div>
        </div>
        <Container fluid className='collection__overview'>
          <div className='collection__overview__left'>
            <div className=''>
              <p>Collection of</p>
              <h2>9</h2>
            </div>
            <div className=''>
              <p>Owned by</p>
              <h2>1</h2>
            </div>
            <div className=''>
              <p>Floor Price</p>
              <h2>0.70 ETH</h2>
            </div>
            <div className=''>
              <p>Total Sales</p>
              <h2> - </h2>
            </div>
          </div>
          <div className='collection__overview__right'>
            <div className=''>
              <HiDotsHorizontal className='threeDot__icon' />
            </div>
            <div className=''>
              <BsDownload className='share__icon' />
              <p>Share</p>
            </div>
          </div>
        </Container>
      </Container>
      <section className=''>
        <Container fluid>
          <NavigationTab />

          <div className='sorting__dropdown'>
            <select>
              <option>Date Minted - Newest</option>
              <option>Date Minted - Oldest Reminds</option>
              <option>Price - Highest</option>
              <option>Price - Lowest</option>
            </select>
          </div>
          <Row xs={1} sm={2} md={3} xxl={4}>
            {NFTs.map((nft) => (
              <Featured key={nft} />
            ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default index;
