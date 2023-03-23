
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CourseCard.module.css'
import PaymentBtn from './PaymentBtn'



export default function CourseCard(){
    
    return(
        <div className="card mb-5">
            <div className="row g-0">
                <div className="col-md-7 order-md-1 order-2">
                    <div className="card-body">
                        <small className={styles.tags}>Enroll Open</small>
                        <h2 className="card-title mt-2">ReactJS for Beginners: A Hands-On Introduction to Frontend Development</h2>
                        <p className="card-text">Learn to build modern, interactive web applications with ReactJS and Bootstrap in this beginner-friendly masterclass.</p>
                        <ul>
                            <li>Live session 👨🏻‍💻</li>
                            <li>Resources 📑</li>
                            <li>Newsletter ✉️</li>
                            <li>Private  community 👥</li>
                            <li>QnA 🙋</li>
                        </ul>
                        <div className='d-flex'>
                            <PaymentBtn />
                            <Link href='/reactjs-masterclass' className="text-decoration-none ms-4 pt-2" >Learn more</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 m-md-4 m-0 order-md-2 order-1 ">
                    <Image src='/img/frontend-web-dev.png' width={300} height={200} className="img-fluid rounded-start card-img" alt='ReactJS for Beginners: A Hands-On Introduction to Frontend Development' />
                    <p className='mt-4 price text-center'><b>₹ 249.0 </b> <small className="me-3 text-muted"><s>₹ 499.0</s></small><small className={styles.tags}>50% off</small></p>
                </div>
            </div>
        </div>
    )
}