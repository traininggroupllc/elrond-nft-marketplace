import React from 'react';

const CommunityGuide = () => {
  return (
    <div className='communityGuide container-xl'>
      <div className='communityGuide__top'>
        <h1>
          Community
          <br />
          Guidelines
        </h1>
        <p>LAST UPDATED - MARCH 8, 2022</p>
      </div>
      <div className='communityGuide__bottom'>
        <p>
          Creating a new system of support for digital art requires mutual
          respect between creators, collectors, and curators. So while we
          provide an unprecedentedly open cultural community, we also want
          everyone to agree on a few key rules and expectations to start. We
          hope you can embody these ideals and help us work towards building a
          welcoming community that empowers creators and collectors alike.
        </p>
        <h3>For the Community</h3>
        <p>
          To break from the old and start something truly new, we must be led by
          values of kindness and inclusivity. Showing respect and care towards
          one another is of utmost importance to all of us as we build a
          community that is welcoming to all.
          <br />
          <br />
          Anyone who is interested in joining our community on a deeper level is
          welcome to become a member of the Foundation Discord. There you’ll
          find creators and collectors engaging in meaningful conversations
          about creative work and process. We also support and learn from each
          other in shared online spaces like Instagram and Twitter.
          <br />
          <br />
          These spaces are also crucial to our belief in community-led curation.
          Our curatorial team selected the first artists to join the site, and
          now our creator community is leading the way. This approach sets the
          stage for a more vibrant and supportive network of creatives to emerge
          over time.
        </p>
        <h3>For Creators</h3>
        <p>
          We always want to center artists and their perspectives in all that we
          do, which includes ensuring the work uploaded to Foundation is
          authentic to the creator. We take this seriously because building
          trust is essential to sustaining a healthy community.
        </p>
        <p className='communityGuide__bold'>
          When you mint and sell an NFT on Foundation:
        </p>
        <ul>
          <li>
            You maintain all legal rights, including copyrights and trademarks
            of your original work.
          </li>
          <li>
            You can reproduce, distribute, exhibit, and make derivative work of
            your piece.
          </li>
        </ul>
        <p className='communityGuide__bold'>
          What you <i>can’t</i> do as a creator:
        </p>
        <ul>
          <li>
            You can’t upload anyone else’s copyrighted or otherwise proprietary
            work.
          </li>
          <li>
            You can’t create additional NFTs that represent the same piece.
            However, related works in a series are acceptable.
          </li>
        </ul>
        <h3>For Collectors</h3>
        <p>
          Collectors in the NFT space are ushering in new cultural paradigms and
          models for arts patronage through their forward-thinking approaches.
          When collectors win an auction, they receive a unique NFT from an
          artist they want to support and champion.
        </p>
        <p className='communityGuide__bold'>
          When you collect an NFT on Foundation:
        </p>
        <ul>
          <li>
            You own the NFT that represents the artwork on the blockchain.
          </li>
          <li>You can display and share the piece.</li>
          <li>
            You can exhibit the piece on any platform or in any virtual space.
          </li>
          <li>You can resell or trade it on a secondary market.</li>
        </ul>
        <p className='communityGuide__bold'>
          What you <i>can’t</i> do as a collector:
        </p>
        <ul>
          <li>
            You can’t claim legal ownership, copyrights, trademarks, or other
            intellectual property rights.
          </li>
          <li>You can’t use the artwork in a commercial context.</li>
          <li>You can’t make any changes to the artwork.</li>
          <li>
            You can’t share the work in a hateful, cruel, or intolerant context.
          </li>
          <li>
            You can’t create additional NFTs that represent the same artwork.
          </li>
        </ul>
        <h3>We all have a responsibility to create a positive environment.</h3>
        <p>
          The short version is: Don’t lie, spam, steal, cause harm, or be
          hateful. If you see any of these behaviors on Foundation, let us know
          via trust@foundation.app. If we determine a creator is doing any of
          these things, we will mediate the situation which may include account
          suspension. Full details are in our Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default CommunityGuide;
