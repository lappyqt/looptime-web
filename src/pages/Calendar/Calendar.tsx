import clsx from 'clsx';
import styles from './Calendar.module.css';

import Formula1Logo from '../../assets/images/icons/series/formula_1.svg?react';
import WecLogo from '../../assets/images/icons/series/wec_short.svg?react';
import GtLogo from '../../assets/images/icons/series/gt_short.svg?react';
import TrackCard from '../../widgets/TrackCard/TrackCard';
import EventCard from '../../widgets/EventCard/EventCard';
import { useEffect, useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { tracksDataset } from '../../dataset/tracks';
import type { Series } from '../../entities/series';
import { eventsDataset } from '../../dataset/event';

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
    const [activeSeries, setActiveSeries] = useState<Series | undefined>(undefined);

    const toggleSeries = (seriesName: Series) => {
        setActiveSeries(prev => prev === seriesName ? undefined : seriesName);
    };

    const filteredTracks = tracksDataset.filter(track => {
        if (!activeSeries) return true;
        return track.series.some(s => s === activeSeries.toLocaleLowerCase());
    });

    const filteredEvents = eventsDataset.filter(event => {
        if (!activeSeries) return true;
        return event.seriesType === activeSeries.toLocaleLowerCase();
    });

    const nowTimestamp = new Date().getTime();
    const pastEvents = filteredEvents.filter(event => nowTimestamp > event.endDate);
    const upcomingEvents = filteredEvents.filter(event => nowTimestamp <= event.endDate);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                {filteredTracks.map((track, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <TrackCard track={track} />
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
                                {upcomingEvents.map((event, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <EventCard event={event} />
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
                                {pastEvents.map((event, index) => (
                                    <motion.div whileHover={{ scale: 1.05 }} variants={cardVariants} key={index}>
                                        <EventCard event={event} />
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