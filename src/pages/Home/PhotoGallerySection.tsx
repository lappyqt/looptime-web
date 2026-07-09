import { motion, useScroll, useSpring, useTransform } from "motion/react";
import styles from './Home.module.css';
import clsx from "clsx";
import { useRef } from "react";
import { useScrollAnimation } from "../../shared/hooks/useScrollAnimation";

function PhotoGallerySection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const titleOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const titleX = useTransform(scrollYProgress, [0.1, 0.2], [150, 0]);

    const smoothTitleX = useSpring(titleX, {
        stiffness: 120,
        damping: 20,
        mass: 0.4,
    });

    const img1 = useScrollAnimation(scrollYProgress, [0.41, 0.48], [270, 0]);
    const img2 = useScrollAnimation(scrollYProgress, [0.45, 0.55], [250, 0]);
    const img3 = useScrollAnimation(scrollYProgress, [0.48, 0.56], [320, 0]);
    const img4 = useScrollAnimation(scrollYProgress, [0.50, 0.58], [190, 0]);
    const img5 = useScrollAnimation(scrollYProgress, [0.52, 0.57], [280, 0]);

    return (
        <motion.section ref={ref} className={styles.photoGallerySection}>
            <div className={styles.stickyWrapper}>
                <motion.span className={clsx(styles.title, styles.gradientText)}
                    style={{ opacity: titleOpacity, x: smoothTitleX }}>
                    ЗАПЕЧЕТЛЯЕМ ИСТОРИЮ
                </motion.span>

                <motion.img src="https://i.pinimg.com/1200x/cf/17/fd/cf17fdc870d0c92c6aa56191c187adc8.jpg"
                    style={{
                        ...img1,
                        top: '10%',
                        left: '5%'
                    }} />

                <motion.img src="https://i.pinimg.com/1200x/08/f2/60/08f26002e9edd17565d2f3c72875919d.jpg"
                    style={{
                        ...img2,
                        bottom: '7%',
                        left: '25%'
                    }} />

                <motion.img src="https://i.pinimg.com/736x/3c/c5/fa/3cc5fa7af78bc0013bf96fc09020616b.jpg"
                    style={{
                        ...img3,
                        top: '15%',
                        left: '35%'
                    }} />

                <motion.img src="https://i.pinimg.com/736x/25/9d/9d/259d9d1e34d6361f7cd7823e2a28b2ae.jpg"
                    style={{
                        ...img4,
                        bottom: '11%',
                        right: '20%'
                    }} />

                <motion.img src="https://i.pinimg.com/1200x/f7/34/b2/f734b21b8d269f049af821c5025400e8.jpg"
                    style={{
                        ...img5,
                        top: '13%',
                        right: '10%'
                    }} />    
            </div>
        </motion.section>
    );
}

export default PhotoGallerySection;