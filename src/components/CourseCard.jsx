
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CourseCard.module.css'

export default function CourseCard(){

    const razorpatBtn = '<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_LN5Z9W4StbJJOk" async> </script> </form>'

    const paymentButton = (el) => {
        return <div dangerouslySetInnerHTML={{ __html: el }} />
    }
    

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
                            {paymentButton(razorpatBtn)}
                            <Link href='/reactjs-masterclass' className="text-decoration-none ms-4 pt-2" >Learn more &rarr; </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 m-md-4 m-0 order-md-2 order-1 ">
                    <Image src='/img/frontend-web-dev.png' width={300} height={200} className="img-fluid rounded-start card-img" alt='ReactJS for Beginners: A Hands-On Introduction to Frontend Development' />
                </div>
            </div>
        </div>
    )
}