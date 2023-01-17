import Link from "next/link";
import styles from '../styles/CourseCard.module.css'


export async function getStaticPaths() {
    const res = await fetch('http://thebasics.sachinsblog.in/api/courses')
    const courses = await res.json()
    const paths = courses.map(course => ({
        params: { slug: course.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch('http://thebasics.sachinsblog.in/api/courses')
    const courses = await res.json()
    const course = courses.find(course => course.slug === params.slug);

    return {
        props: {
            course,
        },
    };
}



export default function Post({ course }) {
    return (
        <div className="col-md-8 col-11 m-auto pageLayout">

            <Link href="/" className="text-decoration-none"> &larr; back to home </Link>

            <div className="row mt-3">
                <div className="col-md-8">
                    <h2 className="subHeading">{course.title}</h2>
                    <p>{course.description}</p>

                    <h5 className="my-5">Contents Updates Soon!...</h5>

                </div>
                <div className="col-md-4">
                    <img src={course.thumbnail} className="img-fluid mb-3" />
                    <p>Proceed to pay</p>
                    <Link href='/' className={styles.enrollBtn}>Join Waitlist &rarr; </Link>

                </div>
            </div>
        </div>
    );
}
