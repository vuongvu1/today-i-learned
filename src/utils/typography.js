import Typography from "typography";
import OceanBeachTheme from "typography-theme-ocean-beach";

OceanBeachTheme.overrideThemeStyles = () => ({
  a: { backgroundImage: `none` },
});

const typography = new Typography(OceanBeachTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
