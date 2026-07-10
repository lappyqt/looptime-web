import { motion } from 'motion/react';
import styles from './EventCard.module.css';

import Formula1Logo from '../../assets/images/icons/series/formula_1.svg?react';
import WecLogo from '../../assets/images/icons/series/wec_short.svg?react';
import GtLogo from '../../assets/images/icons/series/gt_short.svg?react';
import ArrowRight from '../../assets/images/icons/common/arrow_right.svg?react';
import type { Event } from '../../entities/event';

const seriesLogo = {
    f1: Formula1Logo,
    wec: WecLogo,
    gt: GtLogo
};

function EventCard(event: Event) {
    const SeriesLogo = seriesLogo[event.seriesType ?? 'f1'];

    return (
        <motion.div className={styles.trackCard}>
            <div className={styles.info}>
                <div className={styles.trackContainer}>
                    <img src="" />
                </div>
                <p className={styles.eventName}>BRITISH GRAND PRIX</p>
                <p className={styles.location}>SILVERSTONE - UK</p>
            </div>

            <SeriesLogo className={styles.racingSeries} />
              
            <span className={styles.eventCount}>
                3-5 Июль
            </span>

            <ArrowRight className={styles.arrow} />
        </motion.div>
    );
}

export default EventCard;