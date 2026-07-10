import clsx from 'clsx';
import styles from './Calendar.module.css';

import Formula1Logo from '../../assets/images/icons/series/formula_1.svg?react';
import WecLogo from '../../assets/images/icons/series/wec_short.svg?react';
import GtLogo from '../../assets/images/icons/series/gt_short.svg?react';
import TrackCard from '../../widgets/TrackCard/TrackCard';
import EventCard from '../../widgets/EventCard/EventCard';
import { useState } from 'react';
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

function Calendar() {
    const [contentType, setContentType] = useState('tracks');
    const [activeSeries, setActiveSeries] = useState(null);

    const toggleSeries = (seriesName) => {
        setActiveSeries(prev => prev === seriesName ? null : seriesName);
    };

    return (
        <section className={styles.calendarSection}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <div className={styles.content}>
                        <div className={styles.title}>КАЛЕНДАРЬ</div>
                        <div className={styles.filters}>
                            <div className={styles.filterContainer}>
                                <span 
                                    onClick={() => setContentType('tracks')}
                                    className={clsx(styles.filter, styles.textFilter, contentType === 'tracks' && styles.active)}>Трассы</span>
                                <span 
                                    onClick={() => setContentType('events')}
                                    className={clsx(styles.filter, styles.textFilter, contentType === 'events' && styles.active)}>События</span>
                            </div>
                            <div className={styles.filterContainer}>
                                <Formula1Logo
                                    onClick={() => toggleSeries('f1')}
                                    className={clsx(styles.filter, styles.imageFilter, activeSeries === 'f1' && styles.active)} />
                                <WecLogo
                                    onClick={() => toggleSeries('wec')}
                                    className={clsx(styles.filter, styles.imageFilter, activeSeries === 'wec' && styles.active)} />
                                <GtLogo 
                                    onClick={() => toggleSeries('gt')}
                                    className={clsx(styles.filter, styles.imageFilter, activeSeries === 'gt' && styles.active)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardGroup}>
                    { contentType === 'tracks' &&
                        <>
                            <p className={styles.title}>Трассы</p>

                            <motion.div
                                key={'tracks'}
                                className={styles.cards} 
                                variants={containerVariants}
                                initial='hidden'
                                animate='visible'>
                                {new Array(5).fill(null).map((_, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <TrackCard />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    }
                    { contentType === 'events' &&
                        <>
                            <p className={styles.title}>Предстоящие события</p>

                            <motion.div
                                key={'upcoming-events'}
                                className={styles.cards}
                                variants={containerVariants}
                                initial='hidden'
                                animate='visible'>
                                {new Array(8).fill(null).map((_, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <EventCard seriesType='f1' />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <p className={styles.title}>Завершенные события</p>

                            <motion.div
                                key={'past-events'}
                                className={styles.cards}
                                variants={containerVariants}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.15 }}>
                                {new Array(8).fill(null).map((_, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <EventCard seriesType='wec' />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Calendar;