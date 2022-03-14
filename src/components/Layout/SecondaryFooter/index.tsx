import React from 'react';
import NFTCard from 'components/common/NFTCard';

import { ReactComponent as ElrondLogoSymbol } from './../../../assets/img/elrond-symbol.svg';

const SecondaryFooter = () => {
  const NFTs = [1, 2, 3];

  return (
    <div className='secondaryFooter'>
      <div className='container-lg'>
        <div className='secondaryFooter__top'>
          <div className='secondaryFooter__topDetails'>
            <img
              src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
              alt=''
            />
            <p>Rinatto</p>
            <p>@Lbank</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              veniam eum, nemo minus eaque impedit ratione aut eveniet dolores
              est.
            </p>
          </div>
          <div className='secondaryFooter__topCard'>
            {NFTs.map((i) => (
              <NFTCard key={i} />
            ))}
          </div>
        </div>

        <div className='secondaryFooter__bottom'>
          <div>
            <ElrondLogoSymbol className='secondaryFooter__topLogo' />
          </div>
          <div>
            <div>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Blog</p>
            </div>
            <div>
              <p>About</p>
              <p>Press</p>
              <p>Career</p>
              <p>Community guidelines</p>
              <p>Terms of Service</p>
              <p>Privacy</p>
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
