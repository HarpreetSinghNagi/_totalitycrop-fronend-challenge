import React from 'react';


import LoadingFeedShare from '../Shimmer/LoadingFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
import rocketseat from '../../assets/img/rocketseat.png';

import { Container, DownIcon } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <div className="seprator">
            <div className="line" />
            <span>
              Sort by:
              <strong> Top</strong>
            </span>
            <DownIcon />
          </div>
          <FeedPost avatar="https://media-exp1.licdn.com/dms/image/C4D03AQG1jJmMQWB66g/profile-displayphoto-shrink_200_200/0/1652681303112?e=1671667200&v=beta&t=f0_TgvW_P-AIclPmYzG-5UxT1CSlClIPQC9m2xhWmvI" user="Harpreet Singh " title="Front-end Developer at Totality CORP" />
          <FeedPost avatar={rocketseat} user="Rocketseat" title="Educational institution" />
          <FeedPost avatar={facebook} user="Facebook" title="Company" />
          <FeedPost avatar={twitter} user="Twitter" title="Company" />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
