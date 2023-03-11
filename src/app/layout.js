import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'

import Footer from '../components/Footer'
import AlertNotification from '../components/AlertNotifaction'
import Navbar from '../components/Navbar'

import Script from 'next/script'


export const metadata = {
  title: 'the basics class',
  description: 'the basics class offers a range of 90-minute live cohorts and practical resources to learn the fundamentals. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
     {/* Google Analytics Script */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-M0S1K1Z1DT"
        strategy="afterInteractive"
      />
      
      <Script id="google-analytics" strategy="afterInteractive" />
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-M0S1K1Z1DT');
        `}
      <Script />

     <body>
        <AlertNotification />
        <Navbar />
        {children}
        <Footer />
        <Script
          id="bootstrap-cdn"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
