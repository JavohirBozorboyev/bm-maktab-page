import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
      <ProgressBar
        height="3px"
        color="#EAB308"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </AppLayout>
  );
}
