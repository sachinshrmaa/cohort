
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

import styles from './page.module.css'
import PaymentBtn from "../../components/PaymentBtn"

export const metadata = {
    title: 'ReactJS for Beginners: A Hands-On Introduction to Frontend Development',
    description: 'the basics class offers a range of 90-minute live cohorts and practical resources to learn the fundamentals. ',
}

export default function Cohort() {
    
  return (
    <div className="col-md-8 col-11 m-auto pageLayout">
    <Link href="/" className="text-decoration-none"> &larr; back to home </Link>

    <div className="row mt-3">
        <div className="col-md-8 order-1 order-md-0 order-lg-0">
            <h2 className="subHeading">ReactJS for Beginners: A Hands-On Introduction to Frontend Development</h2>
            <p>Learn to build modern, interactive web applications with ReactJS and Bootstrap in this beginner-friendly masterclass.</p>
            <div className={styles.contentDiv}>
                <h4> Content Covered </h4><h5> I. Introduction </h5><ul><li > Overview of the class </li><li > Explanation of what React is and its benefits </li><li > Introduction to the tools and technologies used in React with HTML, CSS, and JavaScript </li></ul><h5> II. Setting Up a Development Environment </h5><ul><li > Installing Node.js and npm </li><li > Creating a new React project using Create React App </li><li > Setting up a code editor </li></ul><h5> III. JSX </h5><ul><li > Explanation of JSX syntax and how it is used in React with HTML, CSS, and JavaScript </li><li > JSX expressions and rendering </li><li > Components in JSX </li></ul><h5> IV. Components </h5><ul><li > Introduction to components </li><li > Creating functional components </li><li > Creating class components </li><li > Using props and state in components </li><li > Understanding component lifecycle methods </li></ul><h5> V. Routing </h5><ul><li > Introduction to routing in React with HTML, CSS, and JavaScript </li><li > Setting up routes using React Router </li><li > Navigating between routes </li></ul><h5> VI. Forms and User Input </h5><ul><li > Handling forms and user input in React with HTML, CSS, and JavaScript </li><li > Controlled and uncontrolled components </li><li > Form validation </li></ul><h5> VII. Styling React Components </h5><ul><li > Introduction to CSS modules </li><li > Adding styles to React components using CSS and JavaScript </li><li > Best practices for styling React components </li></ul><h5> VIII. Using APIs </h5><ul><li > Making API requests in React with HTML, CSS, and JavaScript </li><li > Using Axios for API requests </li><li > Handling API responses </li></ul><h5> IX. Deploying a React Application </h5><ul><li > Preparing a React application for deployment </li><li > Deploying to Vercel or Netlify</li></ul><h5> X. Determination </h5><ul><li> Recap of the course/class </li><li > Final Q&amp;A session </li><li > Language to Teach: HTML, CSS, and JavaScript </li></ul><p>&nbsp;</p><p> HTML, CSS, and JavaScript are essential to building React applications. Therefore, it is important to teach these languages alongside React. This will give students a better understanding of the entire web development process and enable them to build more complex applications in the future. </p>
            </div>
        </div>

        <div className="col-md-4 order-0 order-md-1 order-lg-1 mb-5">
            <Image src='/img/frontend-web-dev.png' height={200} width={400} className="img-fluid mb-3" alt='title'/>
            
            <PaymentBtn />
            <small className="text-muted"> <i>Excluding 18% GST</i> </small> 

            <div className="mt-md-3">
                <p>
                    <b>Class Duration:</b> 3 Days  <br />
                    <b>Batch Size:</b> 20 Students <br />
                    <b>Starts From:</b> 7 April 2023 <br />
                    <b>Ends on:</b> 9 April 2023 <br />
                </p>
            </div>

        </div>
    </div>

    <div className={styles.TestimonialSection}>
        <div className="col-11 m-auto">
            <h2 className="subHeading mb-1 text-center">Wall of Love...</h2>
            <p className='mb-5 mt-1 text-center'>What other people has to say about <b>the basics class</b> ...</p>
            
            <div className='row'>
                <div className="col-md-3">
                    <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">This guy has the aura of teaching any individual with making the topic interesting itself just like teaching JavaScript to a newbie... <a href="https://twitter.com/SachinShrmaa?ref_src=twsrc%5Etfw">@SachinShrmaa</a> ...keep it up brother🤘🤘🤘</p>&mdash; Saheb Kumar Singh (@imbatmanB2) <a href="https://twitter.com/imbatmanB2/status/1631253871527096321?ref_src=twsrc%5Etfw">March 2, 2023</a>
                    </blockquote>         
                </div>
            </div>

            <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        </div>
    </div>
    
</div>
  )
}
