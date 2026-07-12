import { motion } from 'motion/react';
import styles from './EventCard.module.css';

import Formula1Logo from '../../assets/images/icons/series/formula_1.svg?react';
import WecLogo from '../../assets/images/icons/series/wec_short.svg?react';
import GtLogo from '../../assets/images/icons/series/gt_short.svg?react';
import ArrowRight from '../../assets/images/icons/common/arrow_right.svg?react';
import type { Event } from '../../entities/event';
import { Link } from 'react-router';

const seriesLogo = {
    f1: Formula1Logo,
    wec: WecLogo,
    gt: GtLogo
};

interface EventCardProps {
    event: Event;
}

function EventCard(props: EventCardProps) {
    const SeriesLogo = seriesLogo[props.event.seriesType ?? 'f1'];

    return (
        <Link to={`/event/${props.event.id}`}>
            <motion.div className={styles.trackCard}>
                <div className={styles.info}>
                    <div className={styles.trackContainer}>
                        <img src={props.event.circuitPathUrl} />
                    </div>
                    <p className={styles.eventName}>{props.event.name}</p>
                    <p className={styles.location}>{props.event.trackName}</p>
                </div>

                <SeriesLogo className={styles.racingSeries} />
                
                <span className={styles.eventCount}>
                    {props.event.dateString}
                </span>

                <ArrowRight className={styles.arrow} />
            </motion.div>
        </Link>
    );
}

export default EventCard;