import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';

import Header from '../components/Header';
import theme from '../theme';
import React from 'react';
import Footer from 'src/components/Footer';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <NProgress />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default MyApp;
