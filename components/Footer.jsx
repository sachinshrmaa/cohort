import Link from "next/link";


const Footer = () => {
    return (  
        <div className="container">
            <Link href='/terms' className="ms-2">Terms</Link>
            <Link href='/privacy' className="ms-2">Privacy Policy</Link>
            <Link href='/faq' className="ms-2">Frequently Asked Questions</Link>
            <Link href='/refund' className="ms-2">Refund and Cancellation</Link>

        </div>
    );
}
 
export default Footer;