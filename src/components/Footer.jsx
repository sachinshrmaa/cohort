import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (  
        <div className={styles.footerSection}>

            <div className="row col-md-10 m-auto align-items-center ">

                <div className="col-md-4 col-12 mb-4 d-flex justify-content-center justify-content-md-start ">
                    <div>
                        <a href="https://sachinsblog.in" className="text-decoration-none text-white">
                            <h5 className={styles.footerBrand}>sachinsblog</h5>
                        </a>
                        <small>Made with ❤ by Sachin</small> <br />
                        <small>©2023 the basics class ・ All rights reserved.</small>
                    </div>
                </div>

                <div className="col-md-8 col-12 d-flex justify-content-md-end  justify-content-center">

                    <div className="row">
                        <div className="d-flex justify-content-md-end  justify-content-center mb-3">       
                            <a href='https://github.com/sachinshrmaa' target='_blank' rel="noreferrer" className="ms-4 text-decoration-none  "><i className="bi bi-github"></i> </a> <br />
                            <a href='https://www.linkedin.com/company/thebasicsclass/' target='_blank' rel="noreferrer" className="ms-4 text-decoration-none  "><i className="bi bi-linkedin"></i> </a> <br />
                        </div>
                        
                        <div className="d-flex justify-content-md-end  justify-content-center ">
                            <Link href='/newsletter' className="ms-md-2 text-decoration-none  ">Newsletter</Link> ・
                            <Link href='/legal/faq' className="ms-md-2 text-decoration-none  ">FAQ</Link> ・
                            <Link href='/legal/refund' className="ms-md-2 text-decoration-none  ">Refund</Link> ・
                            <Link href='/legal/terms' className="ms-md-2 text-decoration-none  ">Terms</Link> ・
                            <Link href='/legal/privacy' className="ms-2 text-decoration-none  ">Privacy</Link>      
                        </div> 
                    </div>           
                </div>

            </div>

        </div>
    );
}
 
export default Footer;