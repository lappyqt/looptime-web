import clsx from 'clsx';
import styles from './Contact.module.css';
import { motion, useMotionValue } from 'motion/react';
import { useMediaQuery } from 'usehooks-ts';
import { useParallax } from '../../shared/hooks/useParallax';

function Contact() {
    const enableParallax = useMediaQuery('not (pointer: coarse)');

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!enableParallax) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const card2Parallax = useParallax(mouseX, mouseY, 30, -30, 6);
    const card3Parallax = useParallax(mouseX, mouseY, 60, -60, 12); 

    const card2Positions = enableParallax ? card2Parallax : { x: 30, y: -30 };
    const card3Positions = enableParallax ? card3Parallax : { x: 60, y: -60 };

    return (
        <section className={styles.contactSection} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className={styles.content}>
                <div className={styles.titleGroup}>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 100 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>ОСТАВАЙТЕСЬ НА СВЯЗИ</motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>ОСТАВАЙТЕСЬ НА СВЯЗИ</motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}>ОСТАВАЙТЕСЬ НА СВЯЗИ</motion.p>
                </div>

                <div className={styles.stack}>
                    <motion.div style={card2Positions} className={clsx(styles.card, styles.card3)} />
                    <motion.div style={card3Positions} className={clsx(styles.card, styles.card2)} />
                    <motion.div className={clsx(styles.card, styles.card1)}>
                        <form className={styles.formContainer}>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputContainer}>
                                    <label htmlFor='fullname'>Имя</label>
                                    <input id='fullname' type='text' placeholder='Айртон Сенна' />
                                </div>
                                <div className={styles.inputContainer}>
                                    <label htmlFor='email'>Почта</label>
                                    <input id='email' type='email' placeholder='yourmail@mail.com' />
                                </div>
                                <div className={styles.inputContainer}>
                                     <label htmlFor='message'>Сообщение</label>
                                     <textarea id="message" rows={6} placeholder='Ваши пожелания и вопросы'></textarea>
                                </div>
                            </div>
                            
                            <button type='button'>Отправить</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;