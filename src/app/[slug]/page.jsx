import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'



export default async function Post({params}) {

    const {slug} = params

    const res = await fetch('http://localhost:3000/api/classes')
    const classes = await res.json()
    const cohort = classes.find(cohort => cohort.slug === slug)

    const createMarkup = (cohort) => {
        return <div dangerouslySetInnerHTML={{ __html: cohort.content }} />
    }
    
    

    return (
        <div className="col-md-8 col-11 m-auto pageLayout">

            <Link href="/" className="text-decoration-none"> &larr; back to home </Link>

            <div className="row mt-3">
                <div className="col-md-8 order-1 order-md-0 order-lg-0">
                    <h2 className="subHeading">{cohort.title}</h2>
                    <p>{cohort.description}</p>
                    <div className={styles.contentDiv}>{createMarkup(cohort)}</div>
                </div>

                <div className="col-md-4 order-0 order-md-1 order-lg-1 mb-5">

                    <Image src={cohort.thumbnail} className="img-fluid mb-3" height={200} width={400} alt={cohort.title}/>

                    <button className={styles.enrollBtn}> Enroll Now &rarr; <s> ₹ 1499.00</s> ₹ {cohort.price}.00 </button>
                    <small className="text-muted"> <i>Excluding 18% GST</i> </small>
                </div>
            </div>

        </div>
    );
}
