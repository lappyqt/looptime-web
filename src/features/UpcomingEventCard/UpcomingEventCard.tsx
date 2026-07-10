import type { Event } from '../../entities/event';
import styles from './UpcomingEventCard.module.css';
import { motion, type Variants } from 'motion/react';

import Formula1Logo from '../../assets/images/icons/series/formula_1.svg?react';
import WecLogo from '../../assets/images/icons/series/wec_short.svg?react';
import GtLogo from '../../assets/images/icons/series/gt_short.svg?react';
import ArrowRight from '../../assets/images/icons/common/arrow_right.svg?react';

interface UpcomingEventCardProps {
    event: Event,
    number?: number,
    variants: Variants
}

const seriesLogo = {
    f1: Formula1Logo,
    wec: WecLogo,
    gt: GtLogo
};


function UpcomingEventCard(props: UpcomingEventCardProps) {
    const SeriesLogo = seriesLogo[props.event.seriesType ?? 'f1'];

    return (
        <motion.div className={styles.eventCard} variants={props.variants}>
            <div className={styles.top}>
                <SeriesLogo className={styles.logo} />
                <span className={styles.index}>{props.number ? props.number : ''}</span>
            </div>
            <div className={styles.center}>
                <div className={styles.trackContainer}>
                    <img src="" alt="" />
                </div>
                <p className={styles.eventName}>BRITISH GRAND PRIX</p>
                <p className={styles.location}>SILVERSTONE - UK</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.date}>
                    3-5 Июль
                </div>
                <ArrowRight className={styles.arrow} />
            </div>
        </motion.div>
    );
}

export default UpcomingEventCard;