import AboutCard from "../../../components/AboutCard";

export const metadata = {
    title: 'About',
    description: 'We believe that learning should be engaging and interactive, which is why our classes are designed to be hands-on and immersive.',
}

const About = () => {
    return (
      <div className="col-md-6 col-12 m-auto pageLayout">
        <h2 className="subHeading">The Basics Class</h2>

        <p>
          Welcome to the basics class, where we're passionate about helping you
          learn and grow. Our classes are designed to provide you with practical
          skills and hands-on experience, so you can achieve your goals and
          succeed in your career.{" "}
        </p>
        <p>
          We believe that learning should be engaging and interactive, which is
          why our classes are designed to be hands-on and immersive. Join us
          today and discover the power of online learning!
        </p>

        <AboutCard />

        <p>
          If you have questions for me, you can reach out to me either on{" "}
          <a
            href="https://twitter.com/sachinshrmaa"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          or simply mail me at mail.sachinsblog+cohort@gmail.com (don’t forget
          to add the subject). I respond to every email/tweet I get.
        </p>
      </div>
    );
}
 
export default About;