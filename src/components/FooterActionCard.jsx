
import styles from '../styles/FooterActionCard.module.css'

const FooterActionCard = () => {
    return (  
        <div className={styles.footerActionCard}>
            <h1 className={styles.footerCardTitle}>Ready for the move?</h1>
            <p className={styles.footerCardPara}>Join our masterclass today and gain hands-on experience in frontend web development with ReactJS.</p>
            <a href="/reactjs-masterclass" className={styles.footerCardBtn}>Pre-Enroll Now</a>  
        </div>
    );
}
 
export default FooterActionCard;