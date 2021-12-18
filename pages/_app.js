//import "scss/index.scss";
import customTheme from "lib/customTheme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import globalStyles from "lib/globalStyles";
import * as gtag from "lib/gtag";
import Router from "next/router";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export function reportWebVitals({ id, name, label, value }) {
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    gtag.event("send", "event", {
      eventCategory:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      eventAction: name,
      eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    });
  }
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
