import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const socialNetworkData = [
  {
    url: 'https://www.facebook.com/mylesfromhome',
    name: 'facebook',
  },
  {
    url: 'https://www.instagram.com/mylesfromhome/',
    name: 'instagram',
  },
  {
    url: 'https://open.spotify.com/artist/4aHc82sUCkKkkn8dnaMktt',
    name: 'spotify',
  },
  {
    url: 'https://www.tiktok.com/@mylesfromhome',
    name: 'tiktok',
  },
  {
    url: 'https://www.youtube.com/channel/UCBz9N6vLJhpLLzmhhTFX5Ow/playlists',
    name: 'youtube',
  },
];

const SocialIcon = styled.a`
  color: #ffffff;
  /* Removes underline */
  background-image: none;
  transition: 0.2s color ease-out;

  &:hover {
    color: #dbdbdb;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  padding: 15px 15px;
  box-sizing: border-box;

  @media only screen and (max-width: 780px) {
    grid-template-columns: auto auto auto auto auto;
    justify-items: center;
  }
`;

const SocialIcons = () => (
  <Layout>
    {socialNetworkData.map(({ url, name }) => (
      <SocialIcon key={name} href={url} target="_blank">
        <Icon icon={name} size="50px" />
      </SocialIcon>
    ))}
  </Layout>
);

export default SocialIcons;
