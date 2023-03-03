import Link from "next/link";
import styles from '../styles/AlertToast.module.css'


const AlertNotification = () => {
    return (  
        <div className={styles.alertToast}>
            <p className="m-0">Frontend MasterClass in LIVE! <Link href="/frontent-web-development">Enroll Now</Link></p>    
        </div>
    );
}
 
export default AlertNotification;