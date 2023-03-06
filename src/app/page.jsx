import CourseCard from '../components/CourseCard';
import Image from 'next/image'
import Head from './head';
import styles from './page.module.css'
import Link from 'next/link';
import Script from 'next/script';
import FooterActionCard from '../components/FooterActionCard';

async function getData() {
  const res = await fetch('http://localhost:3000/api/classes')
  return res.json();
}


export default async function Home() {

  const twitterSrc = '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

  const twitterMarkup = (el) => {
    return <div dangerouslySetInnerHTML={{ __html: el }} />
  }

  const res = await fetch('http://localhost:3000/api/classes')
  const cohorts = await getData();

  return (
    <div>

    <Head>
      <title>the basics</title>
      <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
    </Head>

    <div className={styles.heroSection}>
      <div className="col-md-10 col-11 m-auto">
        <div className="row align-items-center">

          {/* hero text column */}
          <div className="col-md-6 col-12">
            <h1 className={styles.heroTitle}>the basics class</h1>
            <p>the basics class offers a range of 90-minute live cohorts and practical resources to learn the fundamentals. Join our newsletter for updates and exclusive content to support your learning journey.</p>
 
            {/* Mailchimp form for waitlist */}
            <form action="https://sachinshrmaa.us10.list-manage.com/subscribe/post?u=e94ac720736227167db541b5c&amp;id=5f3f8db4af&amp;f_id=0098c6e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="mt-md-5 mt-4 validate" target="_self">
                <div id="mc_embed_signup_scroll" className="row">

                    <div className="col-md-6 col-12">
                        <input type="email" name="EMAIL" placeholder="yourmail@gmail.com" className={styles.emailInp} id="mce-EMAIL" required />
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
                            <input type="submit" value="Join Newsletter &rarr;" name="subscribe" id="mc-embedded-subscribe" className={styles.emailSubmit} />
                          </div>
                        </div>
                    </div>
                  
                </div>
            </form>
            <p className="text-mute mt-2"><small>by joining you agree the <Link href='/legal/terms' className="text-decoration-none">terms</Link> and <Link href='/legal/privacy' className="text-decoration-none">privacy policy</Link>. </small></p>

          </div>

          
          <div className="col-md-6 col">
            <Image src='/img/heroImg.png' width={400} height={350}  className={styles.heroImg} alt="the basics cohort" />
          </div>

        </div>
      </div>

    </div>


    <div className={styles.mainSection}>

      <div className="col-md-10 col-11 m-auto">
        <div className="row">

          <div className="col-md-4 mb-3">

            <h2 className='subHeading'>Get Started</h2>
            <p>The cohort can be accessed remotely via Google meet.</p>
            <p>To get started, you’ll need: </p>
            <ul>
              <li>Internet connection 🌐</li>
              <li>Laptop/phone 💻</li>
              <li>Valid email 📧</li>             
            </ul>

          </div>

          <div className="col-md-8">

            {cohorts.map(cohort => (
              <CourseCard
                  key={cohort.id}
                  title={cohort.title}
                  description={cohort.description}
                  slug={cohort.slug}
                  price={cohort.price}
                  status={cohort.status}
                  thumbnail={cohort.thumbnail}
              />
            ))}

          </div>

          </div>

        </div>


       <FooterActionCard/>


    </div>

  </div>
  )
}
