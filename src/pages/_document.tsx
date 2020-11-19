import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/selectam.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,100;0,300;0,400;0,600;1,100;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Tool for automated part identification and redesigning to gain from the advantages of additive manufacturing processes (AM)."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
