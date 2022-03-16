import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import { RiShareBoxFill } from 'react-icons/ri';
import NFTCard from 'components/Card/NFTCard';
import SingleCollectionFooter from 'components/Layout/SingleCollectionFooter';
import SingleCollectionNav from 'components/Layout/SingleCollectionNav';
import NavigationTab from 'components/SingleCollection/NavigationTab/NavigationTab';
import NFTImage1 from '../../assets/img/nft-img/nft-crypto.gif';
import NFTImage2 from '../../assets/img/nft-img/nft2.gif';

const data = [NFTImage1, NFTImage2, NFTImage1, NFTImage2, NFTImage1, NFTImage2];

const index = () => {
  return (
    <section>
      <Container fluid className='single__collection'>
        <SingleCollectionNav />
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
          <Row
            xs={2}
            sm={2}
            md={2}
            xl={4}
            className='collection__overview__left'
          >
            <div className=''>
              <p>Collection of</p>
              <h2>9</h2>
            </div>
            <div>
              <p>Owned by</p>
              <div className='owned__by'>
                <h2>1</h2>
                <img
                  src='https://f8n-production.imgix.net/creators/profile/baqfv8nrd-aye-gif-3ripzh.gif?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
                  alt=''
                />
              </div>
            </div>
            <div className=''>
              <p>Floor Price</p>
              <h2>0.70 ETH</h2>
            </div>
            <div className=''>
              <p>Total Sales</p>
              <h2> - </h2>
            </div>
          </Row>
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
      <section className='bottom__content'>
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
            {data.map((img, i) => (
              <NFTCard key={i} image={img} />
            ))}
          </Row>
        </Container>
      </section>
      <SingleCollectionFooter />
    </section>
  );
};

export default index;
