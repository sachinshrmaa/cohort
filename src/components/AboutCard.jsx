import Image from "next/image";
import Link from "next/link";

const AboutCard = () => {
  return (
    <div>
      <div className="row my-md-5 my-3">
        <div className="col-md-7 order-md-0 order-1">
          <h4 className="subHeading">Meet the Instructor</h4>
          <p>
            Hello, I am Sachin, an experienced web developer with over 4 years
            of experience building websites for various freelance clients. I
            have a particular interest in web design and am excited to share my
            knowledge in this area with you in this live class.
            <p />I also won 1st position in an inter-college web design
            competition and was awarded by the Additional Chief Secretary of
            Sikkim hosted by ICFAI college, Sikkim, giving me a deeper
            understanding of what it takes to succeed in this field. I look
            forward to creating an engaging and informative environment for you
            to learn the basics of web development. Let's get started!
          </p>
          <Link
            href="https://sachinsblog.in/about"
            className="text-decoration-none pt-2"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="col-md-5 order-md-1 order-0">
          <Image
            src="/img/my-photo.png"
            width="260"
            height="340"
            className="rounded my-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
