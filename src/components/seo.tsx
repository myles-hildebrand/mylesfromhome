/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
}

const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en-us" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />

      {/* <!-- Search Engine --> */}
      <meta
        property="description"
        content="Myles from Home sounds like Indie Folk going on a successful first date with Funk Jazz."
      />
      <meta property="image" content="https://www.mylesfromhome.com/images/main-fb.jpg" />

      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content="Myles from Home" />
      <meta
        itemProp="description"
        content="Myles from Home sounds like Indie Folk going on a successful first date with Funk Jazz."
      />
      <meta itemProp="image" content="https://www.mylesfromhome.com/images/main-fb.jpg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Myles from Home" />
      <meta
        property="twitter:description"
        content="Myles from Home sounds like Indie Folk going on a successful first date with Funk Jazz."
      />
      {/* Meta tag used to link to a twitter account*/}
      {/*<meta property="twitter:site" content="@mylesfromhome" />*/}
      <meta property="twitter:image:src" content="https://www.mylesfromhome.com/images/main-fb.jpg" />

      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta property="og:title" content="Myles from Home" />
      <meta
        property="og:description"
        content="Myles from Home sounds like Indie Folk going on a successful first date with Funk Jazz."
      />
      <meta property="og:image" content="https://www.mylesfromhome.com/images/main-fb.jpg" />
      <meta
        property="og:image:secure_url"
        content="https://www.mylesfromhome.com/images/main-fb.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="820" />
      <meta property="og:url" content="https://www.mylesfromhome.com/" />
      <meta property="og:site_name" content="Myles from Home" />
      <meta property="og:type" content="website" />

      {/* Songkick Widget */}
      <script async src="//widget.songkick.com/9888034/widget.js" />
    </Helmet>
  );
};

export default SEO;
