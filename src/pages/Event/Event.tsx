import { useEffect } from 'react';
import styles from './Event.module.css'; 
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import TableSection from './TableSection';
import { Link, useParams } from 'react-router';
import { eventsDataset } from '../../dataset/event';
import ScrollToTop from '../../shared/ui/ScrollToTop';

function Event() {
    const { id } = useParams();
    const event = eventsDataset.find(t => t.id === Number(id));

    if (!event) {
        return <div className={styles.notFound}>
            <p>Событие не найдено</p>
            <Link to={'/calendar'} className={styles.link}>Календарь</Link>
        </div>
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.sections}>
            <HeroSection event={event} />
            <StatsSection event={event} />
            <TableSection event={event} />

            <ScrollToTop />
        </section>
    );
}

export default Event;