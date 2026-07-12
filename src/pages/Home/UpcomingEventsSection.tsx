import { motion, type Variants } from 'motion/react';
import styles from './Home.module.css';
import clsx from 'clsx';
import UpcomingEventCard from '../../features/UpcomingEventCard/UpcomingEventCard';
import { eventsDataset } from '../../dataset/event';
import { Link } from 'react-router';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.25
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: 80 
    },
    visible: { 
        opacity: 1, 
        y: 30,
        transition: { duration: 0.8, ease: "easeOut" }
    }
} as Variants;

const cardVariants = {
    hidden: { 
        opacity: 0, 
        transform: "translateY(50px) scale(1)" 
    },
    visible: { 
        opacity: 1, 
        transform: "translateY(0px) scale(1)",
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as Variants;

function UpcomingEventsSection() {
    const nowTimestamp = new Date().getTime();
    const upcomingEvents = eventsDataset.filter(e => e.startDate > nowTimestamp).sort().slice(0, 3);

    return (
       <motion.section className={styles.upcomingEventsSection}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
                <motion.h2 className={clsx(styles.title, styles.gradientText)}
                    variants={titleVariants}>
                    БЛИЖАЙШИЕ СОБЫТИЯ
                </motion.h2>

                <div className={styles.eventCards}>
                    {upcomingEvents.map((event, index) => (
                        <Link to={`/event/${event.id}`} key={index}>
                            <UpcomingEventCard event={event} number={index + 1} variants={cardVariants} />
                        </Link>
                    ))}
                </div>
       </motion.section>
    ); 
}

export default UpcomingEventsSection;