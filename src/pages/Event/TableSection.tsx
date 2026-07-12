import clsx from 'clsx';
import styles from './Event.module.css';
import type { FormulaRaceRow } from '../../dataset/results';
import { FormulaTable } from './Table/FormulaTable';

const formulaResults: FormulaRaceRow[] = [
  { pos: 1, no: 16, driver: 'Charles Leclerc', team: 'Ferrari', laps: 52, timeOrRetired: '1:27:11.335', pts: 25 },
  { pos: 2, no: 63, driver: 'George Russell', team: 'Mercedes', laps: 52, timeOrRetired: '+0.427s', pts: 18 },
  { pos: 3, no: 44, driver: 'Lewis Hamilton', team: 'Ferrari', laps: 52, timeOrRetired: '+0.772s', pts: 15 },
  { pos: 4, no: 1, driver: 'Lando Norris', team: 'McLaren', laps: 52, timeOrRetired: '+1.149s', pts: 12 },
  { pos: 5, no: 6, driver: 'Isack Hadjar', team: 'Red Bull Racing', laps: 52, timeOrRetired: '+1.598s', pts: 10 },
  { pos: 6, no: 30, driver: 'Liam Lawson', team: 'Racing Bulls', laps: 52, timeOrRetired: '+2.023s', pts: 8 },
  { pos: 7, no: 41, driver: 'Arvid Lindblad', team: 'Racing Bulls', laps: 52, timeOrRetired: '+2.214s', pts: 6 },
  { pos: 8, no: 5, driver: 'Gabriel Bortoleto', team: 'Audi', laps: 52, timeOrRetired: '+2.413s', pts: 4 },
  { pos: 9, no: 43, driver: 'Franco Colapinto', team: 'Alpine', laps: 52, timeOrRetired: '+3.229s', pts: 2 },
  { pos: 10, no: 10, driver: 'Pierre Gasly', team: 'Alpine', laps: 52, timeOrRetired: '+3.445s', pts: 1 },
  { pos: 11, no: 81, driver: 'Oscar Piastri', team: 'McLaren', laps: 52, timeOrRetired: '+4.014s', pts: 0 },
  { pos: 12, no: 87, driver: 'Oliver Bearman', team: 'Haas F1 Team', laps: 52, timeOrRetired: '+5.245s', pts: 0 },
  { pos: 13, no: 31, driver: 'Esteban Ocon', team: 'Haas F1 Team', laps: 52, timeOrRetired: '+5.512s', pts: 0 },
  { pos: 14, no: 11, driver: 'Sergio Perez', team: 'Cadillac', laps: 52, timeOrRetired: '+7.403s', pts: 0 },
  { pos: 15, no: 12, driver: 'Kimi Antonelli', team: 'Mercedes', laps: 52, timeOrRetired: '+8.005s', pts: 0 },
  { pos: 16, no: 77, driver: 'Valtteri Bottas', team: 'Cadillac', laps: 52, timeOrRetired: '+8.162s', pts: 0 },
  { pos: 17, no: 55, driver: 'Carlos Sainz', team: 'Williams', laps: 51, timeOrRetired: '+1 lap', pts: 0 },
  { pos: 18, no: 14, driver: 'Fernando Alonso', team: 'Aston Martin', laps: 51, timeOrRetired: '+1 lap', pts: 0 },
  { pos: 19, no: 18, driver: 'Lance Stroll', team: 'Aston Martin', laps: 51, timeOrRetired: '+1 lap', pts: 0 },
  { pos: 20, no: 3, driver: 'Max Verstappen', team: 'Red Bull Racing', laps: 46, timeOrRetired: 'DNF', pts: 0 },
  { pos: 0, no: 23, driver: 'Alexander Albon', team: 'Williams', laps: 43, timeOrRetired: 'DNF', pts: 0 },
  { pos: 0, no: 27, driver: 'Nico Hulkenberg', team: 'Audi', laps: 36, timeOrRetired: 'DNF', pts: 0 }
];

function TableSection() {
    return (
        <section className={styles.tableSection}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Результаты</span>

                <div className={styles.squares}>
                    <div className={clsx(styles.square, styles.big)}></div>
                    <div className={clsx(styles.square, styles.medium)}></div>
                    <div className={clsx(styles.square, styles.small)}></div>
                    <div className={clsx(styles.square, styles.tiny)}></div>
                    <div className={clsx(styles.square, styles.tiny)}></div>
                    <div className={clsx(styles.square, styles.tiny)}></div>
                    <div className={clsx(styles.square, styles.tiny)}></div>
                </div>
            </div>

            <div  className={styles.tableContainer}>
                <FormulaTable data={formulaResults} />
            </div>
        </section>
    );
}

export default TableSection;