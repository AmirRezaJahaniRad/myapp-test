import  createCashe  from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"
import { createTheme, ThemeOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    cardBackground : Palette['primary'];
  }
  interface PaletteOptions {
    cardBackground?: PaletteOptions['primary'];
  }
}

// Insertion Point
const insertionPoint = document.querySelector<HTMLMetaElement>(
  'meta[name="emotion-insertion-point"]'
);

// Create RTL Cashe
export const casheRtl = createCashe({
  key: "muirtl",
  stylisPlugins: [prefixer , rtlPlugin] ,
  insertionPoint : insertionPoint ?? undefined,
});

const baseTheme : ThemeOptions = {
  direction: "rtl",
  typography: {
    fontFamily: " 'Fanavari' , 'Roboto' , 'Arial' "
  }
};

// Create Custome Theme
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary:{
      main : "#8B008B",
    },
    secondary : {
      main : "#f5f5f5"
    },
    cardBackground : {
      main : "#fefefe",
    }
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary:{
      main : "#ffffff",
    },
    secondary : {
      main : "#000000"
    },
    cardBackground : {
      main : "#fefefe",
    }
  }
});

