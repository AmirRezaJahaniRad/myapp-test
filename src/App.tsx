import { ThemeProvider } from "@mui/material/styles"
import { CacheProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

import AuthRoutes from "./routes/AuthRoutes"
import { theme } from "./theme/theme"
import { casheRTL } from "./theme/theme"
import { ToastContainer } from "react-toastify"

import "react-toastify/ReactToastify.css"

const App: React.FC = () => {
  return (
    <CacheProvider value={casheRTL}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <ToastContainer rtl={true}/>
          <AuthRoutes></AuthRoutes>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
