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

function EventsSection() {
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
                    {new Array(3).fill(null).map((_, index) => (
                        <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                            <EventCard seriesType='f1' />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default EventsSection;