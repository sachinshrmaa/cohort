
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

import styles from './page.module.css'
import PaymentBtn from "../../components/PaymentBtn"
import AboutCard from "../../components/AboutCard"

export const metadata = {
    title: 'ReactJS for Beginners',
    description: 'Looking to dive into frontend development with ReactJS? Check out this live class, "ReactJS for Beginners: A Hands-On Introduction to Frontend Development"',
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

                <h4> Prerequisite </h4>
                <p>Having a basics concept of HTML, CSS, JavaScript is must to take this masterclass.</p>

                <h4 className="mt-md-5"> Content Covered </h4>
                <div class="accordion accordion-flush" id="accordionContents">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                I. Introduction 
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                                <ul>
                                    <li > Overview of the class </li>
                                    <li > Explanation of what React is and its benefits </li>
                                    <li > Introduction to the tools and technologies used in React with HTML, CSS, and JavaScript </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            II. Setting Up a Development Environment
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Installing Node.js and npm </li><li > Creating a new React project using Create React App </li><li > Setting up a code editor </li></ul>                            
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            III. JSX 
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                                <ul><li > Explanation of JSX syntax and how it is used in React with HTML, CSS, and JavaScript </li><li > JSX expressions and rendering </li><li > Components in JSX </li></ul>
                            
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            IV. Components 
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Introduction to components </li><li > Creating functional components </li><li > Creating class components </li><li > Using props and state in components </li><li > Understanding component lifecycle methods </li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            V. Routing 
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Introduction to routing in React with HTML, CSS, and JavaScript </li><li > Setting up routes using React Router </li><li > Navigating between routes </li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            VI. Forms and User Input 
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Handling forms and user input in React with HTML, CSS, and JavaScript </li><li > Controlled and uncontrolled components </li><li > Form validation </li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            VII. Styling React Components
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Introduction to CSS modules </li><li > Adding styles to React components using CSS and JavaScript </li><li > Best practices for styling React components </li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingEight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            VIII. Using APIs
                            </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Making API requests in React with HTML, CSS, and JavaScript </li><li > Using Axios for API requests </li><li > Handling API responses </li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingNine">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            IX. Deploying a React Application 
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li > Preparing a React application for deployment </li><li > Deploying to Vercel or Netlify</li></ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTen">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            X. Conclusion
                            </button>
                        </h2>
                        <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionContents">
                            <div class="accordion-body">
                            <ul><li> Recap of the course/class </li><li > Final Q&amp;A session </li><li > Language to Teach: HTML, CSS, and JavaScript </li></ul>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>

        <div className="col-md-4 order-0 order-md-1 order-lg-1 mb-5">
            <Image src='/img/frontend-web-dev.png' height={200} width={400} className="img-fluid mb-3" alt='title'/>
            
            <PaymentBtn />
            <small className="text-muted"> <i>Excluding 18% GST</i> </small> 

            <div className="mt-md-4">
                <h4> Summary </h4>
                <ul>
                    <li><b>Class Duration:</b> 60 mins/5 days </li>
                    <li><b>Class Timing:</b> 9 pm- 10 pm IST </li>
                    <li><b>Batch Size:</b> 20 Students</li>
                    <li><b>Starts From:</b> 3 April 2023</li>
                    <li><b>Ends on:</b> 7 April 2023</li>
                </ul>
            </div>

            <div className="mt-md-5">
                <h4>Share this Class</h4>
                <div className="d-flex mt-3">       
                    <a href='https://www.facebook.com/sharer/sharer.php?&u=https://thebasics.sachinsblog.in/reactjs-masterclass' target='_blank' rel="noreferrer" className="text-decoration-none"><i className="bi bi-facebook"></i> </a> <br />
                    <a href='https://www.linkedin.com/shareArticle?mini=true&url=https://thebasics.sachinsblog.in/reactjs-masterclass' target='_blank' rel="noreferrer" className="ms-4 text-decoration-none  "><i className="bi bi-linkedin"></i> </a> <br />
                    <a href='https://twitter.com/share?text=Looking to dive into frontend development with ReactJS? Check out this live class, "ReactJS for Beginners: A Hands-On Introduction to Frontend Development". &url=https://thebasics.sachinsblog.in/reactjs-masterclass' target='_blank' rel="noreferrer" className="ms-4  text-decoration-none"><i className="bi bi-twitter"></i> </a> <br />
                    <a href='https://api.whatsapp.com/send?text=Looking to dive into frontend development with ReactJS? Check out this live class, "ReactJS for Beginners: A Hands-On Introduction to Frontend Development" Enroll Now: https://thebasics.sachinsblog.in/reactjs-masterclass' target='_blank' rel="noreferrer" className="ms-4  text-decoration-none"><i className="bi bi-whatsapp"></i> </a> <br />
                </div>
            </div>

        </div>
    </div>

    {/* <div>
        <AboutCard />
    </div> */}


    <div className={styles.TestimonialSection}>
        <div className="col-11 m-auto">
            <h2 className="subHeading mb-1 text-center">Wall of Love...</h2>
            <p className='mb-5 mt-1 text-center'>What other people has to say about <b>the basics class</b></p>
            
            <div className='row'>
                <div className="col-md-3">
                    <blockquote className="twitter-tweet">
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
