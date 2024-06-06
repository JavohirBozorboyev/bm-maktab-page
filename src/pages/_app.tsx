import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { SWRConfig } from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 1000 * 10,
        fetcher,
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
        <ProgressBar
          height="3px"
          color="#EAB308"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </AppLayout>
    </SWRConfig>
  );
}
