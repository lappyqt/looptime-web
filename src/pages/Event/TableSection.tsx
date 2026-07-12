import clsx from 'clsx';
import styles from './Event.module.css';
import { formulaRacesResultDataset, gtRacesResultDataset, wecRacesResultDataset, type FormulaRaceRow, type GtRaceRow, type WecRaceRow } from '../../dataset/results';
import { FormulaTable } from './Table/FormulaTable';
import type { Event } from '../../entities/event';
import { WecTable } from './Table/WecTable';
import { GtTable } from './Table/GtTable';

interface TableSectionProps {
    event: Event;
}

function TableSection(props: TableSectionProps) {
    let formulaTable: FormulaRaceRow[] = [];
    let wecTable: WecRaceRow[] = [];
    let gtTable: GtRaceRow[] = [];

    if (props.event.seriesType === 'f1') formulaTable = formulaRacesResultDataset.find(r => r.eventId === props.event.id)?.result || [];
    if (props.event.seriesType === 'wec') wecTable = wecRacesResultDataset.find(r => r.eventId === props.event.id)?.result || [];
    if (props.event.seriesType === 'gt') gtTable = gtRacesResultDataset.find(r => r.eventId === props.event.id)?.result || [];

    const hasData = formulaTable.length > 0 || wecTable.length > 0 || gtTable.length > 0;

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

            <div className={styles.tableContainer}>
                {hasData ? (
                    <>
                        {formulaTable && formulaTable.length > 0 && <FormulaTable data={formulaTable} />}
                        {wecTable && wecTable.length > 0 && <WecTable data={wecTable} />}
                        {gtTable && gtTable.length > 0 && <GtTable data={gtTable} />}
                    </>
                ) : (
                    <span className={styles.noContent}>На данный момент результатов пока нет</span>
                )}
            </div>
        </section>
    );
}

export default TableSection;