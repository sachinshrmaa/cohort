import Head from "next/head";


const Contact = () => {
    return (  
        <div className="col-md-6 col-12 m-auto pageLayout">
            <Head>
                <title>Contact - the basics</title>
                <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
        
            </Head>

            <h2 className="subHeading">Get In Touch!</h2>

            <p>Thank you for visiting the basics page! If you have any questions or comments, we would love to hear from you.</p>

            <p>You can reach to us through the following channels:</p>

            <ul>
                <li>Email: mail.sachinsblog+cohort@gmail.com</li>
                <li>Twitter: twitter.com/sachinshrmaa</li>
                <li>Instagram: instagram.com/sachinshrmaa</li>
                <li>Facebook: facebook.com/sachinshrmaa</li>
                <li>LinkedIn: linkedin.com/company/thebasicsclass/</li>
            </ul>
            <p>We strive to respond to all inquiries within one business day.</p>
            <p>Thank you for choosing. We look forward to serving you!</p>

        </div>
    );
}
 
export default Contact;