import type { WecRaceRow } from '../../../dataset/results';
import styles from './Table.module.css';

interface WecTableProps {
  data: WecRaceRow[];
}

export const WecTable = (props: WecTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.raceTable}>
        <thead>
          <tr>
            <th>Поз.</th>
            <th>№ маш.</th>
            <th>Команда</th>
            <th>Круги</th>
            <th>Общее время</th>
            <th>Отставание</th>
            <th>Интервал</th>
            <th>Лучший круг</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>{row.pos}</td>
              <td>{row.carNo}</td>
              <td className={styles.boldText}>{row.team}</td>
              <td>{row.laps}</td>
              <td>{row.totalTime}</td>
              <td>{row.gap}</td>
              <td>{row.interval}</td>
              <td>{row.bestLap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};