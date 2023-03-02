import Head from "next/head";


const Faq = () => {
    return ( 
            <div className="col-md-6 col-12 m-auto pageLayout">
              <Head>
        <title>FAQ - the basics</title>
        <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
  
      </Head>
                <h2 className='subHeading'>Frequently asked Questions</h2>
                <p>If you still have some questions, please feel free to <a href='/contact' className='text-decoration-none'>contact us</a> and we will gladly provide you with more detailed information about our process.</p>
    
                <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          What is the Basics?
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">the Basics is an online platform built to teach the very basics skills from scratch to any beginner via 90 minute live interactive sessions.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          How to enroll into Courses?
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Enrolling into the course is just easy as buying a book at Amazon. Pick the course you like, and click the Enroll button. Once you have successfully enrolled you will receive a confirmation mail into your inbox.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What if I miss a live session?
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No worries, we got your back! All the sessions are recorded, and are posted privately on YouTube. You can watch it as many times as you like.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          Can I get refund?
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No, For now we do not provide refunds.</div>
                      </div>
                    </div>

                  </div>
    
            </div>
    );
}
 
export default Faq;