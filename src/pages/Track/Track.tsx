import { Link, useParams } from 'react-router';
import styles from './Track.module.css';
import CircuitSection from './CircuitSection';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import PhotogallerySection from './PhotogallerySection';
import EventsSection from './EventsSection';
import { tracksDataset } from '../../dataset/tracks';
import { useEffect } from 'react';
import ScrollToTop from '../../shared/ui/ScrollToTop';


function Track() {
    const { id } = useParams();
    const track = tracksDataset.find(t => t.id === Number(id));

    if (!track) {
        return <div className={styles.notFound}>
            <p>Трасса не найдена</p>
            <Link to={'/calendar'} className={styles.link}>Календарь</Link>
        </div>
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.sections}>
            <CircuitSection track={track} />
            <AboutSection track={track} />
            <StatsSection track={track} />
            <PhotogallerySection track={track} />
            <EventsSection track={track} />

            <ScrollToTop />
        </section>
    );
}

export default Track;