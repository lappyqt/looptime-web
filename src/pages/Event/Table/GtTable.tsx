import styles from './Table.module.css';
import type { GtRaceRow } from "../../../dataset/results";

interface GtTableProps {
  data: GtRaceRow[];
}

export const GtTable = (props: GtTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.raceTable}>
        <thead>
          <tr>
            <th>Поз.</th>
            <th>№ маш.</th>
            <th>Класс</th>
            <th>Пилоты</th>
            <th>Команда</th>
            <th>Машина</th>
            <th>Время</th>
            <th>Круги</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>{row.pos}</td>
              <td>{row.carNo}</td>
              <td>{row.raceClass}</td>
              <td className={styles.boldText}>{row.drivers.join(', ')}</td>
              <td>{row.team}</td>
              <td>{row.carModel}</td>
              <td>{row.time}</td>
              <td>{row.laps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};