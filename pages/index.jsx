import Link from "next/link";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (  
    <div>


      <div className={styles.heroSection}>
        <div className="col-md-10 m-auto">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className={styles.heroTitle}>Cohorts</h1>
              <p>Our workshop kit offers a range of exercises you can run with your team to put the Guidebook’s design patterns into practice in your product.</p>

              <form action="#" className="mt-5">
                <input type="email" placeholder="yourmail@gmail.com" className={styles.emailInp} />
                <input type="submit" value="get early access →" className={styles.emailSubmit} />
              </form>
              <p className="text-mute mt-2"><small>by joining you agree the <Link href='/terms' className="text-decoration-none">terms</Link> and <Link href='/privacy' className="text-decoration-none">privacy policy</Link>. </small></p>

            </div>
            <div className="col-md-6">
              <img src="img/heroImg.png" alt="" className={styles.heroImg} />
            </div>
          </div>
        </div>

      </div>


      <div className={styles.mainSection}>

        <div className="col-md-10 m-auto">
          <div className="row">

            <div className="col-md-4">

              <h2 className={styles.subHeading}>Get Started</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nihil quia a culpa!</p>
              <p>To get started, you’ll need: </p>
              <ul>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
              </ul>

            </div>

            <div className="col-md-8">

              <div className="card">
                <div class="row g-0">
                  <div class="col-md-7">
                    <div className="card-body">
                      <small className={styles.tags}>Upcomming</small> <small className={styles.tags}>free</small>
                      <h2 className="card-title mt-2">Git and GitHub basics</h2>
                      <p className="card-text">Git is a free and open-source version control system, originally created by Linus Torvalds in 2005. </p>
                      <ul>
                        <li>Live session</li>
                        <li>QnA</li>
                        <li>Private community</li>
                      </ul>
                      <a href="#" className={styles.enrollBtn}>Enroll → </a>
                    </div>
                  </div>

                  <div class="col-md-4 m-4">
                    <img src="https://pair.withgoogle.com/guidebook/images/ui-elements/workshop-top.jpg" class="img-fluid rounded-start" alt="..." />
                  </div>
                </div>
              </div>

            </div>



            </div>

          </div>

      </div>

      

      <div className="col-md-10 m-auto">

        

      </div>

    </div>
  );
}
 
export default Home;