import styles from './Footer.module.css';
import CompanyLogo from '../../assets/images/icons/companyLogo.svg?react';
import { Link } from 'react-router';
import clsx from 'clsx';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                <div className={styles.copyrightContainer}>
                    <CompanyLogo className={styles.companyLogo}/>
                    <p className={styles.text}>LoopTime 2026. ALL RIGHTS RESERVED.</p> 
                </div>
            </div>
            <div className={styles.right}>
                <div className={clsx(styles.linkContainer, styles.routes)}>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'#'}>Трассы</Link>
                    <Link to={'/contact'}>Контакты</Link>
                </div>
                
                <div className={styles.divider}></div>

                <div className={clsx(styles.linkContainer, styles.socials)}>
                    <Link to={'#'}>Твиттер</Link>
                    <Link to={'#'}>Вконтакте</Link>
                </div>

                <div className={styles.divider}></div>
            </div>
        </div>
    );
}

export default Footer;