
import Link from 'next/link'
import styles from '../styles/CourseCard.module.css'


export default function CourseCard({title, description, price, thumbnail, slug, status}){
    return(
        <div className="card mb-5">
            <div className="row g-0">
                <div className="col-md-7 order-md-1 order-2">
                    <div className="card-body">
                        <small className={styles.tags}>{status?"Enroll Open":"Upcomming"}</small>
                        <h2 className="card-title mt-2">{title}</h2>
                        <p className="card-text">{description}</p>
                        <ul>
                            <li>Live session 👨🏻‍💻</li>
                            <li>Resources 📑</li>
                            <li>Newsletter ✉️</li>
                            <li>Private  community 👥</li>
                            <li>QnA 🙋</li>
                        </ul>
                        <Link href={slug} className={styles.enrollBtn}>Learn More &rarr; </Link>
                    </div>
                </div>

                <div className="col-md-4 m-md-4 m-0 order-md-2 order-1 ">
                    <img src={thumbnail} className="img-fluid rounded-start" alt="Getting started with Python" />
                </div>
            </div>
        </div>
    )
}