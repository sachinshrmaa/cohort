import Link from "next/link";
import styles from '../styles/AlertToast.module.css'


const AlertNotification = () => {
    return (  
        <div className={styles.alertToast}>
            <div className="col-md-10 m-auto">
                <p className="m-0">Frontend Web Development MasterClass is LIVE! <Link href="/frontent-web-development">Enroll Now</Link></p> 
            </div>
        </div>
    );
}
 
export default AlertNotification;