import Head from "next/head";


const Refund = () => {
    return (  
        <div className="col-md-6 col-12 m-auto pageLayout">
            <Head>
        <title>Refund - the basics</title>
        <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
  
      </Head>

            <h2 className="subHeading">Refund and Cancellation</h2>

            <p>At <b>the basics</b>, we do not offer refunds or accept returns for our online courses.</p>

            <p>Once access to course materials has been granted, the purchase is final and non-refundable. This includes any technical issues or difficulties the student may experience while accessing or completing the course.</p>

            <p>It is the responsibility of the student to ensure that they have the necessary technology and skills to access and complete the course before enrolling. <b>the basics</b> is not responsible for any technical difficulties or issues with the student's personal equipment or internet connection.</p>

            <p>By enrolling in one of our online courses, you acknowledge and agree to this No Refund and Return Policy. If you have any questions or concerns, please contact us before enrolling in a course.</p>

        </div>
    );
}
 
export default Refund;