import SVG from 'react-inlinesvg';
import styles from './Track.module.css';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import type { Track } from '../../entities/track';
import clsx from 'clsx';
import { animate } from 'motion';
import { useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const MotionSVG = motion.create(SVG);

interface CircuitSectionProps {
    track: Track;
}

function CircuitSection(props: CircuitSectionProps) {
    const ref = useRef(null);
    const isMobile = useMediaQuery('screen and (max-width: 768px)');

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20
    });

    const configurationOpacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);

    const yOffset = useTransform(smoothProgress, [0.1, 0.4], ['0px', isMobile ? '-39px' : '-100px']);
    const trackOpacity = useTransform(smoothProgress, [0.1, 0.3], [1, 0]);
    const locationOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);

    const handleSVGLoad = () => {
        const path = document.querySelector('.cls-1');

        if (path) {
            animate(path, {pathLength: [0, 1]}, { duration: 2, ease: 'easeInOut'});
        }
    };

    return (
        <motion.section ref={ref} className={clsx(styles.section, styles.circuitSection)}>
            <div className={styles.stickyWrapper}>
                <div className={styles.circuitContainer}>
                    <SVG className={styles.circuit} src={props.track.circuitPathUrl ?? ''} onLoad={handleSVGLoad} />
                    <MotionSVG style={{ opacity: configurationOpacity }} className={styles.corners} src={props.track.circuitCornersUrl} />
                </div>
                
                <motion.div className={styles.titleContainer}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.4, ease: 'easeOut' }}>
                    <motion.div style={{ y: yOffset }} className={styles.textSlider}>
                
                        <motion.p style={{ opacity: trackOpacity }} className={styles.trackName}>
                            {props.track.name}
                        </motion.p>
                        
                        <motion.p style={{ opacity: locationOpacity }} className={styles.location}>
                            {props.track.country}
                        </motion.p>
                        
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default CircuitSection;