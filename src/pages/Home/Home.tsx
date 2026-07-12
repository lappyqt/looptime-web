import { useEffect } from 'react';
import HeroSection from './HeroSection';
import styles from './Home.module.css';
import PhotoGallerySection from './PhotoGallerySection';
import RacingSeriesSection from './RacingSeriesSection';
import ReviewsSection from './ReviewsSection';
import UpcomingEventsSection from './UpcomingEventsSection';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.sections}>
            <HeroSection />
            <UpcomingEventsSection />
            <RacingSeriesSection />
            <PhotoGallerySection />
            <ReviewsSection />
        </div>
    );
}

export default Home;