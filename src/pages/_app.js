import '@/styles/globals.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, {useEffect} from 'react';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

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