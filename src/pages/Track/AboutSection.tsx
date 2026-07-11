import clsx from 'clsx';
import styles from './Track.module.css';
import type { Track } from '../../entities/track';

interface AboutSectionProps {
    track: Track;
}

function AboutSection(props: AboutSectionProps) {
    return (
        <section className={clsx(styles.section, styles.aboutSection)}>
            <div className={styles.content}>
                <span className={styles.text}>
                    {props.track.description}
                </span>
            </div>
        </section>
    );
}

export default AboutSection;