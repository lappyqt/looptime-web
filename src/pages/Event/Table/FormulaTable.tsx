import styles from './Table.module.css';
import type { FormulaRaceRow } from "../../../dataset/results";

interface FormulaTableProps {
  data: FormulaRaceRow[];
}

export const FormulaTable = (props: FormulaTableProps) => {
  return (
   <div className={styles.tableContainer}>
      <table className={styles.raceTable}>
        <thead>
          <tr>
            <th>Поз.</th>
            <th>№</th>
            <th>Пилот</th>
            <th>Команда</th>
            <th>Круги</th>
            <th>Время / Сход</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>{row.pos}</td>
              <td>{row.no}</td>
              <td className={styles.boldText}>{row.driver}</td>
              <td>{row.team}</td>
              <td>{row.laps}</td>
              <td>{row.timeOrRetired}</td>
              <td className={styles.boldText}>{row.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};