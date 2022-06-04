import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import SocialIcons from './SocialIcons';

const Layout = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url('/images/main.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 780px) {
    display: grid;
    align-items: center;
    grid-template-rows: 1fr min-content;
    background-attachment: scroll;
  }
`;

const SocialIconsWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  @media only screen and (max-width: 780px) {
    position: initial;
  }
`;

const TitleImgLayout = styled.div`
  aspect-ratio: 5/7;

  @media only screen and (max-width: 500px) {
    width: 100vw;
    max-width: 500px;
  }

  @media only screen and (max-width: 780px) and (min-width: 500px) {
    aspect-ratio: unset;
    
  }

  @supports not (aspect-ratio: 5 / 7) {
    width: 700px;
  }
`;

const MainSection = () => {
  const imageData = useStaticQuery(getImages);

  return (
    <Layout>
      <TitleImgLayout>
        <GatsbyImage
          image={imageData.bandLandingImage.childImageSharp.gatsbyImageData}
          alt={'Myles from Home image'}
        />
      </TitleImgLayout>
      <SocialIconsWrapper>
        <SocialIcons />
      </SocialIconsWrapper>
    </Layout>
  );
};

export default MainSection;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
    }
  }
`;

const getImages = graphql`
  query {
    bandLandingImage: file(relativePath: { eq: "images/title-white.png" }) {
      ...fluidImage
    }
  }
`;
