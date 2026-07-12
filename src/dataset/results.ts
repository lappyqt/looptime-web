export type FormulaRaceRow = {
    pos: number;
    no: number;
    driver: string;
    team: string;
    laps: number;
    timeOrRetired: string;
    pts: number;
};

export type WecRaceRow = {
  pos: number;
  carNo: string;
  team: string;
  laps: number;
  totalTime: string;
  gap: string;
  interval: string;
  bestLap: string;
};

export type GtRaceRow = {
  pos: number;
  carNo: string;
  raceClass: string;
  drivers: string[];
  team: string;
  carModel: string;
  time: string;
  laps: number;
};