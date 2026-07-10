import { motion, type Variants } from "motion/react";
import styles from './Home.module.css';
import clsx from "clsx";

function RacingSeriesSection() {
    return (
        <section className={styles.racingSeriesSection}>
            <div className={clsx(styles.series, styles.formula1)}>
                <div className={styles.content}>
                    <motion.img className={styles.seriesLogo} src="/series/formula_1.svg" alt="Formula 1 Logo" />
                    <span className={styles.text}>
                        <b>Formula-1 </b>
                        — чемпионат мира для болидов с открытыми колесами и вершина технологий.
                        Десять команд борются за Кубок конструкторов и личный зачет пилотов в формате Гран-при
                        из квалификации и гонки на 305 километров. По правилам гонщики обязаны совершить минимум
                        один пит-стоп для смены типа шин.
                    </span>
                </div>
            </div>
            <div className={clsx(styles.series, styles.wec)}>
                <div className={styles.content}>
                    <img className={styles.seriesLogo} src="/series/wec_long.svg" alt="Wec Logo" />
                    <span className={styles.text}>
                        <b>WEC </b>
                        — главный чемпионат на выносливость с культовым марафоном «24 часа Ле-Мана».
                        Суть серии заключается в проверке надежности техники на дистанциях от 6 до 24 часов,
                        где одновременно гоняют два класса машин: Hypercar и LMGT3. Одним болидом по правилам посменно управляют три пилота.
                    </span>
                </div>
            </div>
            <div className={clsx(styles.series, styles.gt)}>
                <div className={styles.content}>
                    <img className={styles.seriesLogo} src="/series/gt_long.svg" alt="GT Logo" />
                    <span className={styles.text}>
                        <b>GT3 </b>
                        — гонки спортивных машин, построенных на базе серийных дорожных суперкаров.
                        Это популярный клиентский спорт для профессионалов и любителей, где шансы разных
                        конструкций авто уравнивает система BoP через регулировку веса и мощности. Заезды
                        длятся до 3 часов и требуют смены пилотов.
                    </span>
                </div>
            </div>
        </section>
    );
}

export default RacingSeriesSection;