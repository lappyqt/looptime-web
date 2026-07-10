import { motion } from 'motion/react';
import styles from './TrackCard.module.css';
import ArrowRight from '../../assets/images/icons/common/arrow_right.svg?react';

function TrackCard() {
    return (
        <motion.div className={styles.trackCard}>
            <div className={styles.info}>
                <div className={styles.trackContainer}>
                    <img src="" />
                </div>
                <p className={styles.trackName}>SILVERSTONE</p>
                <p className={styles.location}>UNITED KINDOM</p>
            </div>

            <span className={styles.distance}>
                5.900 KM
            </span>
            <span className={styles.eventCount}>
                3 События
            </span>

            <ArrowRight className={styles.arrow} />
        </motion.div>
    );
}

export default TrackCard;