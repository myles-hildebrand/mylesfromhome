/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MainSection from '../components/MainSection';
import InstagramFeed from '../components/InstagramFeed';

const musicVideoIds = ['shorts/tZJgmdaeg8k', //Almost Everything - fire short
                       'K-CUs8lI8f8', //You’re Gonna Go Far - Live at Fox Cabaret
                       'lJKyf1b6nN8']; //Myles from Home - Life in the Sun (Official Music Video)
                       //'hkszcg3Alc8', //Myles From Home - LIVE at Blue Light Sessions
                       //'YdGEDSZ2WM4', //Myles from Home - Life in the Sun (Live in Vancouver)  
                       //'vsT4zibcbCg', //Myles from Home - Don't Get on the Train (Lyric Video)
                       //'xOLALNeZaIQ'];//Myles from Home - Nearest Star (Lyric Video)
                       
                       
                       //'rJfJ-NAFWb8']; //Gnarfunkel // Myles from Home ~ Full Flower Moon (Official Music Video)
                       //'C_HO2scAQT4'];//CAFÉ RACER ♢ Molly Doesn’t Move Anymore 

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 780px) {
    padding: 0 10px;
  }
`;

const Footer = styled.div`
  border-top: #2b2b2b 1px solid;
  margin-top: 24px;
  width: 100%;
  padding: 24px 0;
  text-align: center;
  font-size: 12px;
`;

const SectionTitle = styled.h1`
  padding-bottom: 20px;
  text-align: center;
`;

const MusicLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MusicIframe = styled.iframe`
  @media only screen and (max-width: 780px) {
    width: 100%;
    padding-bottom: 40px;

    &:last-child {
      padding: 0;
      margin-bottom: 0;
      background-color: black;
    }
  }
`;

const SongkickWidget = styled.div`
  width: 100%;
`;

const Content = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 900px;
  }
`;

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Index = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={siteTitle} />
      <MainSection />

      <Content>
        <Section>
          <SectionTitle>Music</SectionTitle>
          <MusicLayout>
            {/* <MusicIframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/biw8ToAzRTY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> 
            <MusicIframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hkszcg3Alc8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            {musicVideoIds.map(id => (
              <MusicIframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
            <MusicIframe
              src="https://open.spotify.com/embed/artist/4aHc82sUCkKkkn8dnaMktt?utm_source=generator"
              width="560"
              height="180"//height="315"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </MusicLayout>
        </Section>
        <Section>
          <SectionTitle>Upcoming Shows</SectionTitle>
          <SongkickWidget>
            <a
              className="songkick-widget"
              href="https://www.songkick.com/artists/8303668"
              data-theme="dark"
              data-track-button="on"
              data-detect-style="true"
              data-background-color="transparent"
            />
          </SongkickWidget>
        </Section>
        <Section>
          <SectionTitle>Follow On Instagram</SectionTitle>
          <InstagramFeed />
        </Section>
      </Content>
      <Footer> Copyright © Myles from Home ~ Website Design by Sebastian Valdivia</Footer>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
