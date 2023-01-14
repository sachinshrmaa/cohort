import Link from "next/link";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (  
    <div>

      <Head>
        <title>the basics</title>
        <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
  
      </Head>

      <div className={styles.heroSection}>
        <div className="col-md-10 col-11 m-auto">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <h1 className={styles.heroTitle}>Cohorts</h1>
              <p>the basics offer a range of micro-courses in the form of 90-minutes live cohorts and resources you can use to put everything into practice.</p>
   
              <form action="https://sachinshrmaa.us10.list-manage.com/subscribe/post?u=e94ac720736227167db541b5c&amp;id=5f3f8db4af&amp;f_id=0098c6e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="mt-md-5 mt-4 validate" target="_self">
                  <div id="mc_embed_signup_scroll" className="row">

                      <div className="col-md-6 col-12">
                          <input type="email" name="EMAIL" placeholder="yourmail@gmail.com" className={styles.emailInp} id="mce-EMAIL" required />
                          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>

                          <div hidden="true"><input type="hidden" name="tags" value="14152423" /></div>

                          <div id="mce-responses" class="clear foot">
                            <div class="response d-none" id="mce-error-response" ></div>
                            <div class="response d-none" id="mce-success-response" ></div>
                          </div>    

                          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                          <div className="form-meta" aria-hidden="true"><input type="text" name="b_e94ac720736227167db541b5c_5f3f8db4af" tabindex="-1" value="" /></div>

                      </div>

                      <div className="col-md-6 col-12 mt-3 mt-md-0">
                          <div class="optionalParent">
                            <div class="clear foot">
                              <input type="submit" value="join waitlist →" name="subscribe" id="mc-embedded-subscribe" className={styles.emailSubmit} />
                            </div>
                          </div>
                      </div>
                    
                  </div>
              </form>

              <p className="text-mute mt-2"><small>by joining you agree the <Link href='/terms' className="text-decoration-none">terms</Link> and <Link href='/privacy' className="text-decoration-none">privacy policy</Link>. </small></p>

            </div>
            <div className="col-md-6 col">
              <img src="img/heroImg.png" alt="" className={styles.heroImg} />
            </div>
          </div>
        </div>

      </div>


      <div className={styles.mainSection}>

        <div className="col-md-10 col-11 m-auto">
          <div className="row">

            <div className="col-md-4 mb-3">

              <h2 className={styles.subHeading}>Get Started</h2>
              <p>The cohort can be accessed remotely via Google meet.</p>
              <p>To get started, you’ll need: </p>
              <ul>
                <li>Internet connection 🌐</li>
                <li>Laptop/phone 💻</li>
                <li>Valid email 📧</li>
                <li> less than 300 Rupees 💵 (optional)</li>
              
              </ul>

            </div>

            <div className="col-md-8">

              <div className="card">
                <div class="row g-0">
                  <div class="col-md-7 order-md-1 order-2">
                    <div className="card-body">
                      <small className={styles.tags}>Upcomming</small> <small className={styles.tags}>free</small>
                      <h2 className="card-title mt-2">Git and GitHub basics</h2>
                      <p className="card-text">Git is a free and open-source version control system, originally created by Linus Torvalds in 2005. </p>
                      <ul>
                        <li>Live session 👨🏻‍💻</li>
                        <li>Resources 📑</li>
                        <li>Newsletter ✉️</li>
                        <li>Private  community 👥</li>
                        <li>QnA 🙋</li>
                      </ul>
                      <a href="#" className={styles.enrollBtn}>Enroll Closed → </a>
                    </div>
                  </div>

                  <div class="col-md-4 m-md-4 m-0 order-md-2 order-1 ">
                    <img src="/img/git.png" class="img-fluid rounded-start" alt="..." />
                  </div>
                </div>
              </div>

              <div className="card my-5">
                <div class="row g-0">
                  <div class="col-md-7 order-md-1 order-2">
                    <div className="card-body">
                      <small className={styles.tags}>Upcomming</small>
                      <h2 className="card-title mt-2">Introduction to Machine Learning</h2>
                      <p className="card-text">Git is a free and open-source version control system, originally created by Linus Torvalds in 2005. </p>
                      <ul>
                        <li>Live session 👨🏻‍💻</li>
                        <li>Resources 📑</li>
                        <li>Newsletter ✉️</li>
                        <li>Private  community 👥</li>
                        <li>QnA 🙋</li>
                      </ul>
                      <a href="#" className={styles.enrollBtn}>Enroll Closed  ₹ 249.0 → </a>
                    </div>
                  </div>

                  <div class="col-md-4 m-md-4 m-0 order-md-2 order-1 ">
                    <img src="/img/git.png" class="img-fluid rounded-start" alt="..." />
                  </div>
                </div>
              </div>

            </div>



            </div>

          </div>

      </div>

    </div>
  );
}
 
export default Home;