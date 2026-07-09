import { motion, type Variants } from "motion/react";
import styles from './Home.module.css';
import clsx from "clsx";

function RacingSeriesSection() {
    const sectionVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    } as Variants;

    const contentVariants = {
        hidden: { 
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8
            }
        }
    } as Variants;

    return (
        <motion.section className={styles.racingSeriesSection}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <motion.div className={clsx(styles.series, styles.formula1)} variants={cardVariants}>
                <motion.div className={styles.content} variants={contentVariants}>
                    <img className={styles.seriesLogo} src="/series/formula_1.svg" alt="Formula 1 Logo" />
                    <span className={styles.text}>
                        <b>Formula-1 </b>
                        — чемпионат мира для болидов с открытыми колесами и вершина технологий.
                        Десять команд борются за Кубок конструкторов и личный зачет пилотов в формате Гран-при
                        из квалификации и гонки на 305 километров. По правилам гонщики обязаны совершить минимум
                        один пит-стоп для смены типа шин.
                    </span>
                </motion.div>
            </motion.div>
            <motion.div className={clsx(styles.series, styles.wec)} variants={cardVariants}>
                <motion.div className={styles.content} variants={contentVariants}>
                    <img className={styles.seriesLogo} src="/series/wec_long.svg" alt="Wec Logo" />
                    <span className={styles.text}>
                        <b>WEC </b>
                        — главный чемпионат на выносливость с культовым марафоном «24 часа Ле-Мана».
                        Суть серии заключается в проверке надежности техники на дистанциях от 6 до 24 часов,
                        где одновременно гоняют два класса машин: Hypercar и LMGT3. Одним болидом по правилам посменно управляют три пилота.
                    </span>
                </motion.div>
            </motion.div>
            <motion.div className={clsx(styles.series, styles.gt)} variants={cardVariants}>
                <motion.div className={styles.content} variants={contentVariants}>
                    <img className={styles.seriesLogo} src="/series/gt_long.svg" alt="GT Logo" />
                    <span className={styles.text}>
                        <b>GT3 </b>
                        — гонки спортивных машин, построенных на базе серийных дорожных суперкаров.
                        Это популярный клиентский спорт для профессионалов и любителей, где шансы разных
                        конструкций авто уравнивает система BoP через регулировку веса и мощности. Заезды
                        длятся до 3 часов и требуют смены пилотов.
                    </span>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default RacingSeriesSection;