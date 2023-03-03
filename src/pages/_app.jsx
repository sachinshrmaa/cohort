import Navbar from "../components/Navbar"
import AlertNotification from "../components/AlertNotifaction"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import '../styles/globals.css'


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


