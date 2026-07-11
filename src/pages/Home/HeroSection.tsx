import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react'; 
import { useMediaQuery } from 'usehooks-ts';
import styles from './Home.module.css';
import { Link } from 'react-router';

function HeroSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    const isTouchScreen = useMediaQuery('(pointer: coarse)');

    const top = useTransform(scrollYProgress, [0, 0.2], [80, 0], { clamp: true });
    const side = useTransform(scrollYProgress, [0, 0.2], [30, 0], { clamp: true });
    const bottom = useTransform(scrollYProgress, [0, 0.2], [isTouchScreen ? 80 : 30, 0], { clamp: true });
    const borderRadius = useTransform(scrollYProgress, [0, 0.2], [20, 0], { clamp: true });

    const inset = useMotionTemplate`${top}px ${side}px ${bottom}px`;

    const textOpacity = useTransform(scrollYProgress, [0.4, 0.6, 1], [1, 0, 0], { clamp: true });
    const textY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, -100, -100], { clamp: true });
    const smoothTextY = useSpring(textY, {
        stiffness: 130,
        damping: 30,
        mass: 0.6,
    });

    const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0], { clamp: true });

    return (
        <motion.section ref={sectionRef} className={styles.heroSection}>
            <div className={styles.stickyWrapper}>
                <motion.div className={styles.videoContainer}
                    style={{inset, borderRadius: borderRadius}}>
                        <motion.div className={styles.content}
                            style={{
                                opacity: textOpacity,
                                y: smoothTextY
                            }}>
                            <p className={styles.contentTitle}>
                                СКОРОСТЬ НА ПРЕДЕЛЕ
                            </p>
                            <p className={styles.contentDescription}>Главные гоночные события сезона 2026</p>

                            <Link to='/calendar'>
                                <motion.button className={styles.contentButton} 
                                    whileHover={{ borderRadius: 0 }} transition={{ duration: 0.2 }}>
                                    Расписание
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div className={styles.scrollIndicator} style={{ opacity: scrollOpacity }}>
                            <span>Scroll</span>
                        </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default HeroSection;