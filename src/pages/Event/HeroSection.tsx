import styles from './Event.module.css'; 
import { motion, type Variants } from 'motion/react';

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
        scaleX: 1, 
        transition: { duration: 0.6, ease: "easeInOut" }
    }
} as Variants;

const topTextVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.6, duration: 0.6, ease: "easeOut" }
    }
} as Variants;

const bottomTextVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
    }
} as Variants;

function HeroSection() {
    return (
        <motion.section 
            className={styles.heroSection}>
            <div className={styles.content}>
                <motion.span className={styles.title}
                    initial="hidden"
                    animate="visible"
                    variants={topTextVariants}>ГРАН-ПРИ ВЕЛИКОБРИТАНИИ</motion.span>
                <motion.div className={styles.line}
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}></motion.div>
                 
                <motion.div className={styles.underlineContainer}
                    initial="hidden"
                    animate="visible"
                    variants={bottomTextVariants}>
                    <div className={styles.dates}>21-24 МАЯ</div>
                    <div className={styles.roundNumber}>Раунд 7</div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection;