import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AlertNotification from "../components/AlertNotifaction"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AlertNotification />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
