import { CssBaseline, ThemeProvider } from "@mui/material"
import { CacheProvider } from "@emotion/react"

import { QueryClientProvider , QueryClient } from "react-query"

import AuthRoutes from "./routes/AuthRoutes"
import { lightTheme , darkTheme , casheRtl} from "./styles/theme/theme"
import useGlobalStore from "./store/GlobalStore"
import "react-toastify/ReactToastify.css"

const queryClient = new QueryClient();
const App: React.FC = () => {
  const { isDarkMode } = useGlobalStore()
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={casheRtl}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline></CssBaseline>
            <AuthRoutes>
            </AuthRoutes>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default App;
