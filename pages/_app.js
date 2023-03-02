import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect } from "react";
import AlertNotification from '../components/AlertNotifaction';


const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js');
    }, []);
    
    return(
      <>
        <AlertNotification />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
}
  export default MyApp


