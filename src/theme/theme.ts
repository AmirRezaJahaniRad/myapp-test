import  createCashe  from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"
import { createTheme } from "@mui/material/styles"

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

// Create Custome Theme
export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: " 'Fanavari' , 'Roboto' , 'Arial' "
  },
});
