import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.headerFontFamily = ['Marko One', 'Work Sans'];
fairyGatesTheme.googleFonts = [
  ...fairyGatesTheme.googleFonts,
  {
    name: 'Marko One',
    styles: ['400'],
  },
];
fairyGatesTheme.overrideThemeStyles = () => {
  return {
    body: {
      color: `#ffffff`,
      'background-color': `#000000`,
    },
    'h1,h2,h3': {
      color: `#ffffff`,
    },
  };
};

// delete fairyGatesTheme.googleFonts

const typography = new Typography(fairyGatesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
