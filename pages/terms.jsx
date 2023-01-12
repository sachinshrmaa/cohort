import Head from "next/head";

const Terms = () => {
    return (  
        <div className="col-md-6 col-12 m-auto pageLayout">
            <Head>
        <title>Terms - the basics </title>
        <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
  
      </Head>

            <h2 className="subHeading">Terms and Conditions</h2>
            <p>By using our website and enrolling in our online courses, you agree to the following terms and conditions:</p>

           <p> <b>Payment: </b> All course fees must be paid in full before access to course materials is granted.</p>

           <p> <b>Refunds: </b> No refunds will be given for any course after access to course materials has been granted.</p>

           <p> <b>Copyright: </b> All course materials are the property of <b>cohort.sachinsblog</b> and are protected by copyright law. These materials may not be shared or distributed without written permission.</p>

           <p> <b>Responsibility: </b> It is the responsibility of the student to ensure that they have the necessary technology and skills to access and complete the course. <b>cohort.sachinsblog</b> is not responsible for any technical difficulties or issues with the student's personal equipment or internet connection.</p>

           <p> <b>Liability: </b> <b>cohort.sachinsblog</b> will not be held liable for any damages or losses that may occur as a result of taking one of our online courses.</p>

           <p> <b>Termination: </b> <b>cohort.sachinsblog</b> reserves the right to terminate a student's access to a course at any time for any reason.</p>

           <p> By using our website and enrolling in our online courses, you acknowledge that you have read and understand these terms and conditions and agree to be bound by them.</p>
            
        </div>
    );
}
 
export default Terms;