import React from 'react';
import AboutFoundation from 'components/About/AboutFoundation';
import HowItworks from 'components/About/HowItworks/HowItworks';
import WhatCollectorHaveToSay from 'components/About/WhatCollectorHaveToSay/WhatCollectorHaveToSay';
import WhatCreatorHaveToSay from 'components/About/WhatCreatorHaveToSay/WhatCreatorHaveToSay';

const About = () => {
  return (
    <div className='container-xl px-4 my-5 py-5'>
      <AboutFoundation />
      <WhatCreatorHaveToSay />
      <WhatCollectorHaveToSay />
      <HowItworks />
    </div>
  );
};

export default About;
