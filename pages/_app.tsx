// import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  // use Tsx => QueryProvider
  const client = new QueryClient();
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
