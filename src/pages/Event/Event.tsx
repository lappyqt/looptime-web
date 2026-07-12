import { useEffect } from 'react';
import styles from './Event.module.css'; 
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import TableSection from './TableSection';

function Event() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.sections}>
            <HeroSection />
            <StatsSection />
            <TableSection />
        </section>
    );
}

export default Event;