import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (  
        <div className={styles.footerSection}>

            <div className="row col-md-10 m-auto align-items-center">
                <div className="col-md-4 col-12 mb-4 d-flex justify-content-center justify-content-md-start">
                    <a href="https://sachinsblog.in" className="text-decoration-none text-dark">
                        <h5 className={styles.footerBrand}>SachinsBlog</h5>
                        <small>Made with ❤ by Sachin</small>
                    </a>
                </div>

                <div className="col-md-8 col-12 d-flex justify-content-md-end  justify-content-center">
                    <Link href='/terms' className="ms-md-2 text-decoration-none">Terms</Link> ・
                    <Link href='/privacy' className="ms-2 text-decoration-none">Privacy</Link> ・
                    <Link href='/faq' className="ms-2 text-decoration-none">FAQ</Link> ・
                    <Link href='/refund' className="ms-2 text-decoration-none">Cancellation</Link>                    
                </div>
            </div>

        </div>
    );
}
 
export default Footer;