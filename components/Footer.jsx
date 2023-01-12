import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (  
        <div className={styles.footerSection}>

            <div className="row col-md-10 m-auto ">
                <div className="col-md-4">
                    <h5 className={styles.footerBrand}>SachinsBlog</h5>
                    <small>Made with ❤ by Sachin</small>
                </div>
                <div className="col-md-8">
                    <Link href='/terms' className="ms-2 text-decoration-none">Terms</Link> ・
                    <Link href='/privacy' className="ms-2 text-decoration-none">Privacy</Link> ・
                    <Link href='/faq' className="ms-2 text-decoration-none">FAQ</Link> ・
                    <Link href='/refund' className="ms-2 text-decoration-none">Refund and Cancellation</Link>                    
                </div>
            </div>

        </div>
    );
}
 
export default Footer;