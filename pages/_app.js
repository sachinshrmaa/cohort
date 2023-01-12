import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect } from "react";


const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js');
    }, []);
    
    return(
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
}
  export default MyApp


