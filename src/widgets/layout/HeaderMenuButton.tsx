import { useMenuStore } from '../../features/FullScreenMenu/menuStore';
import { motion, type Transition } from 'motion/react';
import styles from './HeaderMenuButton.module.css';

const buttonLayout = {
    topLine: {
        closed: {
            rotate: 0,
            y: 0
        },
        open: {
            rotate: 45,
            y: 6
        }
    },
    bottomLine: {
        closed: {
            rotate: 0,
            y: 0
        },
        open: {
            rotate: -45,
            y: -6
        }
    }
};

const transition = {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
} as Transition<any>;

function HeaderMenuButton() {
    const isOpen = useMenuStore(state => state.isOpen);
    const toggle = useMenuStore(state => state.toggle);

    return (
        <button type="button" className={styles.menuButton} onClick={toggle}>
            <motion.div
                className={styles.line}
                variants={buttonLayout.topLine}
                animate={isOpen ? "open" : "closed"}
                transition={transition}
            />

            <motion.div
                className={styles.line}
                variants={buttonLayout.bottomLine}
                animate={isOpen ? "open" : "closed"}
                transition={transition}
            />
        </button>
    );
}

export default HeaderMenuButton;