import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const MyApp = ({ Component, pageProps }) => {
    return(
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    )
}
  export default MyApp


