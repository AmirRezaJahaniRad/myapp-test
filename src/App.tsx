import { CssBaseline, ThemeProvider } from "@mui/material"
import { CacheProvider } from "@emotion/react"

import { QueryClientProvider , QueryClient } from "react-query"

import AuthRoutes from "./routes/AuthRoutes"
import { theme , casheRtl} from "./theme/theme"
import "react-toastify/ReactToastify.css"

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={casheRtl}>
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <AuthRoutes>
            </AuthRoutes>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default App;
