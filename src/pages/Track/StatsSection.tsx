import clsx from 'clsx';
import styles from './Track.module.css';
import { motion, type Variants } from 'motion/react';

import type { Track } from '../../entities/track';

interface StatsSectionProps {
    track: Track;
}

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: { 
        opacity: 1, 
        y: 15,
        transition: { duration: 0.7, ease: "easeOut" }
    }
} as Variants;

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
} as Variants;

function StatsSection(props: StatsSectionProps) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            className={clsx(styles.section, styles.statsSection)}>
            <motion.span className={clsx(styles.title, styles.gradientText)} variants={titleVariants}>
                НЕМНОГО СТАТИСТИКИ
            </motion.span>

            <div className={styles.cards}>
                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ДИСТАНЦИЯ</span>
                    </div>

                    <p className={styles.value}>{props.track.distance} KM</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>КООРДИНАТЫ</span>
                    </div>

                    <p className={styles.value} style={{ fontSize: 48, textAlign: 'center' }}>{props.track.coordinates}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ГОД ОТКРЫТИЯ</span>
                    </div>

                    <p className={styles.value}>{props.track.openedInYear}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>РЕКОРД КРУГА</span>
                    </div>

                    <p className={styles.value}>{props.track.lapRecordTime}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ПОВОРОТОВ</span>
                    </div>

                    <p className={styles.value}>{props.track.turnsCount}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>МЕСТ НА ТРИБУНЕ</span>
                    </div>

                    <p className={styles.value}>{props.track.grandstandCapacity}</p>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default StatsSection;