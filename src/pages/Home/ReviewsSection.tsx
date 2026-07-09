import { motion, type Variants } from 'motion/react';
import styles from './Home.module.css';
import clsx from 'clsx';

const partnersLogoUrls = [
    '/partners/Porsche.svg',
    '/partners/CL16.svg',
    '/partners/Ferrari.svg',
    '/partners/McLaren.svg',
    '/partners/WEC.svg'
];

function ReviewsSection() {
    const sectionVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.25
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
            transition: { duration: 0.8, ease: "easeOut" }
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
            transition: { duration: 0.6, ease: "easeOut" }
        }
    } as Variants;

    return (
        <motion.section className={styles.reviewsSection}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <motion.span className={clsx(styles.title, styles.gradientText)} variants={titleVariants}>
                ЧТО ГОВОРЯТ ПРО НАС
            </motion.span>

            <motion.div className={styles.reviews}>
                <motion.div className={styles.review} variants={cardVariants}>
                    <div className={styles.text}>
                        Мне нравится, когда всё работает быстро и без лишнего.
                        Здесь именно такой: чистый дизайн, плавные анимации и удобное расписание.
                        А инфографика и схемы трасс делают сайт действительно интересным для любого фаната гонок.
                    </div>
                    <div className={styles.author}>
                        <span className={styles.authorName}>Макс Ферстаппен</span> 
                        — пилот Red Bull Racing, четрёхкратный чемпион мира Формулы-1
                    </div>
                </motion.div>
                <motion.div className={styles.review} variants={cardVariants}>
                    <div className={styles.text}>
                        Хороший интерфейс всегда строится на деталях.
                        Здесь минимализм отлично сочетается с информативностью,
                        а анимации и визуализация помогают воспринимать данные гораздо быстрее.
                        Очень качественная работа.
                    </div>
                    <div className={styles.author}>
                        <span className={styles.authorName}>Тото Вольф</span> 
                        — руководитель и CEO Mercedes-AMG Petronas Formula One Team
                    </div>
                </motion.div>
                <motion.div className={styles.review} variants={cardVariants}>
                    <div className={styles.text}>
                        Этот сайт передает атмосферу автоспорта.
                        Пространство, плавные переходы и красивые анимации трасс делают просмотр
                        расписания по-настоящему приятным. Видно, что проект создавали с любовью к гонкам.
                    </div>
                    <div className={styles.author}>
                        <span className={styles.authorName}>Льюис Хэмилтон</span>
                        — семикратный чемпион мира Формулы-1, пилот Ferrari
                    </div>
                </motion.div>
                <motion.div className={styles.review} variants={cardVariants}>
                    <div className={styles.text}>
                        Когда следишь сразу за F1, WEC и GT3, хочется иметь всё в одном месте. 
                        Здесь это получилось отлично: современный дизайн, понятная инфографика и удобная навигация.
                        Таким сервисом действительно хочется пользоваться.
                    </div>
                    <div className={styles.author}>
                        <span className={styles.authorName}>Кевин Эстре</span>
                        — заводской пилот Porsche Penske Motorsport, чемпион мира WEC
                    </div>
                </motion.div>
            </motion.div>

            <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack}>
                    {[...partnersLogoUrls, ...partnersLogoUrls, ...partnersLogoUrls, ...partnersLogoUrls].map((src, i) => (
                        <div key={i} className={styles.logoContainer}>
                            <img src={src} alt='' className={styles.partnerLogo} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default ReviewsSection;