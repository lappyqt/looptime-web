import clsx from 'clsx';
import styles from './Event.module.css';
import { motion, type Variants } from 'motion/react';
import ArrowOutward from '../../assets/images/icons/common/arrow_outward.svg?react';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: { 
        opacity: 1, 
        y: 15,
        transition: { duration: 0.7, ease: "easeOut" }
    }
} as Variants;

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
} as Variants;

function StatsSection() {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            className={clsx(styles.section, styles.statsSection)}>
            <motion.span className={clsx(styles.title, styles.gradientText)} variants={titleVariants}>
                НЕМНОГО СТАТИСТИКИ
            </motion.span>

            <div className={styles.cards}>
                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ТРАССА</span>
                    </div>

                    <div className={clsx(styles.value, styles.outward)}>
                        <p>SILVERSTONE</p>
                        <ArrowOutward/>
                    </div>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>СЕРИЯ</span>
                    </div>

                    <p className={styles.value} style={{ fontSize: 48, textAlign: 'center' }}>{}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>КОЛИЧЕСТВО КРУГОВ</span>
                    </div>

                    <p className={styles.value}>{}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ДИСТАНЦИЯ</span>
                    </div>

                    <p className={styles.value}>{}</p>
                </motion.div>

                {/* <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>ПОВОРОТОВ</span>
                    </div>

                    <p className={styles.value}>{}</p>
                </motion.div>

                <motion.div className={styles.statCard} variants={cardVariants}>
                    <div className={styles.topLine}>
                        <div className={styles.circle}></div>
                        <span className={styles.cardTitle}>МЕСТ НА ТРИБУНЕ</span>
                    </div>

                    <p className={styles.value}>{}</p>
                </motion.div> */}
            </div>
        </motion.section>
    );
}

export default StatsSection;