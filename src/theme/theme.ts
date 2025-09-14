import  createCashe  from "@emotion/cache"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"
import { createTheme } from "@mui/material/styles"

// Create Custome Theme
export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vasir , roboto"
  },
});

// Create RTL Cashe
export const casheRTL = createCashe({
  key: "muirtl",
  stylisPlugins: [prefixer , rtlPlugin]
})