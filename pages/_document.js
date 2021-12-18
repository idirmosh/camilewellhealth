import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isProduction = process.env.NODE_ENV === "production";
    return { ...initialProps, isProduction };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
