import { useLockBodyScroll } from '../../shared/hooks/useLockBodyScroll';
import { useMenuStore } from './menuStore';

import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router';

import styles from './FullScreenMenu.module.css';
import clsx from 'clsx';

const MotionLink = motion.create(Link);

function FullScreenMenu() {
    const isOpen = useMenuStore(state => state.isOpen);
    const toggle = useMenuStore(state => state.toggle);
    useLockBodyScroll(isOpen);

    return (
        <AnimatePresence>
            {isOpen && 
                <motion.nav
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
                    exit={{ y: '-100vh', transition: { duration: 0.5, ease: 'easeInOut' } }} 
                    className={styles.menu}>
                    <div className={styles.links}>
                        <MotionLink onClick={toggle} className={styles.link} to={'/'} whileHover={{ color: '#aaaaaa' }}>
                            Главная
                        </MotionLink>
                        <MotionLink onClick={toggle} className={styles.link} to={'/contact'} whileHover={{ color: '#aaaaaa' }}>
                            Контакты
                        </MotionLink>
                        <MotionLink onClick={toggle} className={styles.link} to={'/calendar'} whileHover={{ color: '#aaaaaa' }}>
                            Календарь
                        </MotionLink>
                    </div>   

                    <div className={styles.socialsContainer}>
                        <p className={styles.title}>Следите за новостями</p>
                        <div className={styles.socials}>
                            <motion.a className={clsx(styles.circle, styles.twitter)} whileHover={{ scale: 1.1 }}></motion.a>
                            <motion.a className={clsx(styles.circle, styles.vk)} whileHover={{ scale: 1.1 }} href='https://vk.com/f1series' target='_blank'></motion.a>
                        </div>
                    </div> 
                </motion.nav>
            }
        </AnimatePresence>
    );
}

export default FullScreenMenu;