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
                        <MotionLink onClick={toggle} className={styles.link} to={'/'}>
                            Главная
                        </MotionLink>
                        <MotionLink onClick={toggle} className={styles.link} to={'/contact'}>
                            Контакты
                        </MotionLink>
                        <MotionLink onClick={toggle} className={styles.link} to={'/calendar'}>
                            Календарь
                        </MotionLink>
                    </div>   

                    <div className={styles.socialsContainer}>
                        <p className={styles.title}>Следите за новостями</p>
                        <div className={styles.socials}>
                            <motion.div className={clsx(styles.circle, styles.twitter)} whileHover={{ scale: 1.1 }}></motion.div>
                            <motion.div className={clsx(styles.circle, styles.vk)} whileHover={{ scale: 1.1 }}></motion.div>
                        </div>
                    </div> 
                </motion.nav>
            }
        </AnimatePresence>
    );
}

export default FullScreenMenu;