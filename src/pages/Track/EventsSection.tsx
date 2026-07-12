import { eventsDataset } from '../../dataset/event';
import type { Track } from '../../entities/track';
import EventCard from '../../widgets/EventCard/EventCard';
import styles from './Track.module.css';
import { motion, type Variants } from 'motion/react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut'
        }
    }
} as Variants;

interface EventsSectionProps {
    track: Track
}

function EventsSection(props: EventsSectionProps) {
    const eventsOnTrack = eventsDataset.filter(e => e.trackId === props.track.id);

    return (
        <section className={styles.eventsSection}>
            <div className={styles.cardGroup}>
                <p className={styles.title}>События на треке</p>

                <motion.div
                    key={'upcoming-events'}
                    className={styles.cards}
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.15 }}>
                    {eventsOnTrack.map((event, index) => (
                        <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                            <EventCard event={event} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default EventsSection;