import '@/styles/globals.css'
import 'aos/dist/aos.css';
import "../styles/_app.scss";

import AOS from 'aos';
import React, {useEffect} from 'react';
import Contact from '../../components/common/Contact';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';


export default function MyApp({ Component, pageProps } = AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
      AOS.init({
        once: true,
        duration: 1200,
      });
    };
    use();
  }, []);

  return <>
  <Navbar />
    <Component {...pageProps} />
    <Contact />
  <Footer />
  </>;
}