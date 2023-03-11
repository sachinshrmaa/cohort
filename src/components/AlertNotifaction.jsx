import Link from "next/link";
import styles from '../styles/AlertToast.module.css'


const AlertNotification = () => {
    return (  
        <div className={styles.alertToast}>
            <div className="col-md-10 m-auto">
                <p className="m-0">ReactJS for Beginners: A Hands-On Introduction to Frontend Development MasterClass is LIVE! <Link href="/reactjs-masterclass">Pre-Enroll Now</Link></p> 
            </div>
        </div>
    );
}
 
export default AlertNotification;