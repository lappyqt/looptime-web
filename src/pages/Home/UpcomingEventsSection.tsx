import { motion, type Variants } from 'motion/react';
import styles from './Home.module.css';
import clsx from 'clsx';
import UpcomingEventCard from '../../features/UpcomingEventCard/UpcomingEventCard';

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
                    <UpcomingEventCard event={{ seriesType: 'f1' }} number={1} variants={cardVariants} />
                    <UpcomingEventCard event={{ seriesType: 'wec' }} number={2} variants={cardVariants} />
                    <UpcomingEventCard event={{ seriesType: 'gt' }} number={3} variants={cardVariants} />
                </div>
       </motion.section>
    ); 
}

export default UpcomingEventsSection;