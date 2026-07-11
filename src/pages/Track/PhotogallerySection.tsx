import { motion } from 'motion/react';
import styles from './Track.module.css';
import clsx from 'clsx';
import { PhotoCarousel } from '../../widgets/EmblaCarousel/PhotoCarousel';
import type { Track } from '../../entities/track';

interface PhotogallerySectionProps {
    track: Track;
}

function PhotogallerySection(props: PhotogallerySectionProps) {
    return (
        <motion.section className={clsx(styles.section, styles.photogallerySection)}>
            <p className={clsx(styles.title, styles.gradientText)}>ФОТОГАЛЛЕРЕЯ</p>
            { (props.track.galleryUrls !== null && props.track.galleryUrls.length > 0) && 
                <PhotoCarousel imagesUrls={props.track.galleryUrls} />
            }
            {
                (props.track.galleryUrls !== null && props.track.galleryUrls.length < 1) &&
                <div className={styles.noContent}>
                    <span>На данный момент фотографий нет</span>
                </div>
            }
        </motion.section>
    );
}

export default PhotogallerySection;