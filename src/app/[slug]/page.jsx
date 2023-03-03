import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import Script from "next/script";



export default async function Post({params}) {

    const {slug} = params

    const res = await fetch('https://thebasics.sachinsblog.in/api/classes')
    const classes = await res.json()
    const cohort = classes.find(cohort => cohort.slug === slug)

    const createMarkup = (cohort) => {
        return <div dangerouslySetInnerHTML={{ __html: cohort.content }} />
    }


    const razorpatBtn = '<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_LN5Z9W4StbJJOk" async> </script> </form>'


    const paymentButton = (el) => {
        return <div dangerouslySetInnerHTML={{ __html: el }} />
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

                    <Image src={cohort.thumbnail} height={200} width={400} className="img-fluid mb-3" alt={cohort.title}/>
                    

                    {paymentButton(razorpatBtn)}
                    <small className="text-muted"> <i>Excluding 18% GST</i> </small> 
                   
                </div>
            </div>

        </div>
    );
}
