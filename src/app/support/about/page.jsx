
export const metadata = {
    title: 'About',
    description: 'We believe that learning should be engaging and interactive, which is why our classes are designed to be hands-on and immersive.',
}

const About = () => {
    return (  
        <div className="col-md-6 col-12 m-auto pageLayout">

            <h2 className="subHeading">The Basics Class</h2>

            <p>Welcome to the basics class, where we're passionate about helping you learn and grow. Our classes are designed to provide you with practical skills and hands-on experience, so you can achieve your goals and succeed in your career. </p>
            <p>We believe that learning should be engaging and interactive, which is why our classes are designed to be hands-on and immersive. Join us today and discover the power of online learning!</p>


            <h2 className="subHeading mt-md-5">Meet the Instructor</h2>

            <p>I'm thrilled to be your instructor for this live class! My name is Sachin, and I have over 4 years of experience in web development. I've built websites for numerous freelance clients and have a particular passion for web design.
           <p/>I am excited to share my knowledge with you in this class, where we'll be covering the basics of web development. With my experience in web design, I hope to provide you with a solid foundation in this subject, helping you learn how to design and build stunning websites.
           <p/> Additionally, I am proud to say that I won 1st position in an inter-college web design competition and was awarded by the Additional Chief Secretary of Sikkim hosted by ICFAI College, Sikkim. This experience has helped me gain a deeper understanding of what it takes to succeed in this field, and I am excited to share this knowledge with you.
           <p/> I hope to create an engaging and informative environment where you feel comfortable asking questions and exploring the fascinating world of web development. So, let's get started!</p>

            {/* <p>Hi there! My name is Sachin, I'm a computer engineering student majoring in artificial intelligence and machine learning at <a href="http://www.sist.edu.in/Public/Index/Home" target="_blank" rel="noreferrer">Sikkim Institute of Science and Technology</a>, Chisopani, Sikkim - India.</p>
            <p>Apart from studies I like to <a href="https://stipill.in" target="_blank" rel="noreferrer">build software</a> related to the web and ml. I like to spend my leisure time reading books(mostly non-fiction), teaching data science at <a href="/" target="_blank" rel="noreferrer">the basics class</a>, and writing about finance, health, tech, and more at <a href="https://sachinsblog.in" target="_blank" rel="noreferrer">SachinsBlog</a>.</p>
            <p>And once a week I set aside some time to share the things I'm learning through my work, books, and awesome people I meet through my <a href="https://sachinsblog.in/newsletter" target="_blank" rel="noreferrer">SachinsBlog Insider Newsletter</a>(feel free to join).</p> */}
            <p>If you have questions for me, you can reach out to me either on <a href="https://twitter.com/sachinshrmaa" target="_blank" rel="noreferrer">Twitter</a> or simply mail me at mail.sachinsblog+cohort@gmail.com (don’t forget to add the subject). I respond to every email/tweet I get.</p>
    

        </div>
    );
}
 
export default About;