import { motion, useScroll, useSpring, useTransform } from "motion/react";
import styles from './Home.module.css';
import clsx from "clsx";
import { useRef } from "react";
const baseUrl = import.meta.env.BASE_URL;
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

                <motion.img src={`${baseUrl}/photogalleryH/image1.webp`}
                    style={{
                        ...img1,
                        top: '20%',
                        left: '5%'
                    }} />

                <motion.img src={`${baseUrl}/photogalleryH/image2.webp`}
                    style={{
                        ...img2,
                        bottom: '7%',
                        left: '25%'
                    }} />

                <motion.img src={`${baseUrl}/photogalleryH/image3.webp`}
                    style={{
                        ...img3,
                        top: '15%',
                        left: '35%'
                    }} />

                <motion.img src={`${baseUrl}/photogalleryH/image4.webp`}
                    style={{
                        ...img4,
                        bottom: '11%',
                        right: '20%'
                    }} />

                <motion.img src={`${baseUrl}/photogalleryH/image5.webp`}
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