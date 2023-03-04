
import styles from '../styles/FooterActionCard.module.css'

const FooterActionCard = () => {
    return (  
        <div className={styles.footerActionCard}>
            <h1 className={styles.footerCardTitle}>Ready for the move?</h1>
            <p className={styles.footerCardPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis doloribus sapiente.</p>
            <a href="/frontend-web-development" className={styles.footerCardBtn}>Enroll Now</a>  
        </div>
    );
}
 
export default FooterActionCard;