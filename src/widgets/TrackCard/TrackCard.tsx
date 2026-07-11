import { motion } from 'motion/react';
import styles from './TrackCard.module.css';
import ArrowRight from '../../assets/images/icons/common/arrow_right.svg?react';
import type { Track } from '../../entities/track';
import { Link } from 'react-router';

interface TrackCardProps {
    track: Track;
}

function TrackCard(props: TrackCardProps) {
    return (
        <Link to={`/track/${props.track.id}`}>
            <motion.div className={styles.trackCard}>
                <div className={styles.info}>
                    <div className={styles.trackContainer}>
                        <img src={props.track.imageUrl} />
                    </div>
                    <p className={styles.trackName}>{props.track.name}</p>
                    <p className={styles.country}>{props.track.country}</p>
                </div>

                <span className={styles.distance}>
                    {props.track.distance} KM
                </span>
                <span className={styles.eventCount}>
                    События: {props.track.eventsCount}
                </span>

                <ArrowRight className={styles.arrow} />
            </motion.div>
        </Link>
    );
}

export default TrackCard;