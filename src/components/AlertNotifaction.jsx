import Link from "next/link";
import styles from '../styles/AlertToast.module.css'


const AlertNotification = () => {
    return (  
        <div className={styles.alertToast}>
            <div className="col-md-10 m-auto d-flex justify-content-between">
                <p className="m-0">Frontend Web Development MasterClass is LIVE! <Link href="/frontent-web-development">Enroll Now</Link></p> 
                <button type="button" class="btn-close" aria-label="Close"></button>  
            </div>
        </div>
    );
}
 
export default AlertNotification;