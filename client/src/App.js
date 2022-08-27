// routes
import Router from "./routes/routes";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
//reat-query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//redux
import store from "./store";
import { Provider } from "react-redux";

import "./styles/GlobalStyles.css";
// ----------------------------------------------------------------------

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider>
          <ScrollToTop />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
