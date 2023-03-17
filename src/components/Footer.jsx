import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (  
        <div className={styles.footerSection}>

            <div className="row col-md-10 m-auto ">

                <div className="col-md-4 col-12">
                    <div>
                        <a href="https://sachinsblog.in" className="text-decoration-none text-white">
                            <h5 className={styles.footerBrand}>sachinsblog</h5>
                        </a>
                        <small>Made with ❤ by Sachin</small> <br />

                        <div className="d-flex mt-3">       
                            <a href='https://github.com/sachinshrmaa' target='_blank' rel="noreferrer" className="text-decoration-none  "><i className="bi bi-github"></i> </a> <br />
                            <a href='https://www.linkedin.com/company/thebasicsclass/' target='_blank' rel="noreferrer" className="ms-4 text-decoration-none  "><i className="bi bi-linkedin"></i> </a> <br />
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-12">
                    <div className="row">
                        <div className="col">
                            <nav class="nav flex-column">
                                <Link href='/support/about' className="nav-link">About</Link>
                                <Link href='/support/contact' className="nav-link">Contact</Link>
                                <Link href='/newsletter' className="nav-link ">Newsletter</Link>
                            </nav>
                        </div>  
                        <div className="col">
                            <nav class="nav flex-column">
                                <Link href='/legal/faq' className="nav-link">FAQ</Link>
                                <Link href='/legal/refund' className="nav-link ">Refund</Link>
                                <Link href='/legal/terms' className="nav-link ">Terms</Link>
                                <Link href='/legal/privacy' className="nav-link">Privacy</Link>  
                            </nav>
                        </div>  
                    </div>           
                </div>

                <div className="col-md-5 col-12">
                    <h3 className={styles.footerHeading}>Join the Newsletter</h3>
                    <p>Join our newsletter for updates and exclusive content to support your learning journey.</p>
                    {/* Mailchimp form */}
                    <form action="https://sachinshrmaa.us10.list-manage.com/subscribe/post?u=e94ac720736227167db541b5c&amp;id=5f3f8db4af&amp;f_id=0098c6e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
                        <div id="mc_embed_signup_scroll" className="row">

                            <div className="col-md-6 col-12">
                                <input type="email" name="EMAIL" placeholder="yourmail@gmail.com" className={styles.emailInpFooter} id="mce-EMAIL" required />
                                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>

                                <div hidden="true"><input type="hidden" name="tags" value="14152423" /></div>

                                <div id="mce-responses" className="clear foot">
                                    <div className="response d-none" id="mce-error-response" ></div>
                                    <div className="response d-none" id="mce-success-response" ></div>
                                </div>    

                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                <div className="form-meta" aria-hidden="true"><input type="text" name="b_e94ac720736227167db541b5c_5f3f8db4af" tabindex="-1" value="" /></div>

                            </div>

                            <div className="col-md-6 col-12 mt-3 mt-md-0">
                                <div className="optionalParent">
                                    <div className="clear foot">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={styles.emailSubmitFooter} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                    <p className="text-mute mt-2"><small>by joining you agree the <Link href='/legal/terms' className="text-decoration-none">terms</Link> and <Link href='/legal/privacy' className="text-decoration-none">privacy policy</Link>. </small></p>

                </div>

            </div>

            <div className="text-center mt-4 border-top py-3">
                <small>©2023 the basics class ・ All rights reserved.</small>
            </div>

        </div>
    );
}
 
export default Footer;