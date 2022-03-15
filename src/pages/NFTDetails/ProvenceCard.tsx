import React from 'react';

const ProvenceCard = () => {
  const shareSVG = (
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
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
      <polyline points='15 3 21 3 21 9' />
      <line x1='10' y1='14' x2='21' y2='3' />
    </svg>
  );

  return (
    <div className='nftDetails__bottomBottomCard'>
      <div>
        <img
          src='https://f8n-production.imgix.net/creators/profile/hhhb3bkym-000889210032-jpg-6q7yz2.jpg?q=50&w=36&h=36&auto=format%2Ccompress&fit=crop&dpr=2'
          alt=''
        />
      </div>
      <div>
        <p>1.00 ETH</p>
        <div>
          <p>
            Listed by <span>@llyaSh</span>
          </p>
          <p>Dec 18,2021 at 7:52pm</p>
        </div>
      </div>
      <div>{shareSVG}</div>
    </div>
  );
};

export default ProvenceCard;
