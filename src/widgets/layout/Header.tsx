import clsx from 'clsx';
import { motion } from 'motion/react'
import CompanyLogo from '../../assets/images/icons/companyLogo.svg?react';
import HeaderMenuButton from './HeaderMenuButton';

import styles from './Header.module.css';
import { useMenuStore } from '../../features/FullScreenMenu/menuStore';
import { Link } from 'react-router';

const MotionLink = motion.create(Link);

function Header() {
    const isOpen = useMenuStore(state => state.isOpen);

    return (
        <header className={clsx(styles.container, {[styles.containerOpen]: isOpen})}>
            <div className={styles.content}>
                <MotionLink to={'/'} className={styles.logoContainer} whileHover={{ scale: 1.05 }}>
                    <CompanyLogo className={styles.companyLogo} />
                </MotionLink>
                
                <HeaderMenuButton />
            </div>
        </header>
    );
}

export default Header;