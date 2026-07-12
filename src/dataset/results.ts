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

export const wecRacesResultDataset: { eventId: number, result: WecRaceRow[] }[] = [
  {
    eventId: 3,
    result: [
      { pos: 1, carNo: "#20", team: "BMW M TEAM WRT", laps: 151, totalTime: "15:57:18", gap: "-", interval: "-" },
      { pos: 2, carNo: "#15", team: "BMW M TEAM WRT", laps: 151, totalTime: "18:24:39", gap: "1.969", interval: "1.969" },
      { pos: 3, carNo: "#50", team: "FERRARI AF CORSE", laps: 151, totalTime: "18:24:40", gap: "2.622", interval: "0.653" },
      { pos: 4, carNo: "#007", team: "ASTON MARTIN THOR TEAM", laps: 151, totalTime: "19:41:08", gap: "5.004", interval: "2.382" },
      { pos: 5, carNo: "#7", team: "TOYOTA RACING", laps: 151, totalTime: "19:51:35", gap: "6.015", interval: "1.011" },
      { pos: 6, carNo: "#83", team: "AF CORSE", laps: 151, totalTime: "19:43:23", gap: "11.552", interval: "5.537" },
      { pos: 7, carNo: "#93", team: "PEUGEOT TOTALENERGIES", laps: 151, totalTime: "19:43:25", gap: "12.861", interval: "1.309" },
      { pos: 8, carNo: "#17", team: "GENESIS MAGMA RACING", laps: 151, totalTime: "16:11:01", gap: "29.882", interval: "17.021" },
      { pos: 9, carNo: "#12", team: "CADILLAC HERTZ TEAM JOTA", laps: 151, totalTime: "14:52:00", gap: "31.837", interval: "1.955" },
      { pos: 10, carNo: "#8", team: "TOYOTA RACING", laps: 151, totalTime: "18:22:33", gap: "32.165", interval: "0.328" },
      { pos: 11, carNo: "#36", team: "ALPINE ENDURANCE TEAM", laps: 151, totalTime: "16:31:50", gap: "32.376", interval: "0.211" },
      { pos: 12, carNo: "#35", team: "ALPINE ENDURANCE TEAM", laps: 149, totalTime: "16:04:23", gap: "2 Laps", interval: "2 Laps" },
      { pos: 13, carNo: "#19", team: "GENESIS MAGMA RACING", laps: 143, totalTime: "15:52:59", gap: "8 Laps", interval: "6 Laps" },
      { pos: 14, carNo: "#009", team: "ASTON MARTIN THOR TEAM", laps: 136, totalTime: "16:06:38", gap: "15 Laps", interval: "7 Laps" },
      { pos: 15, carNo: "#51", team: "FERRARI AF CORSE", laps: 129, totalTime: "16:10:46", gap: "22 Laps", interval: "7 Laps" },
      { pos: 16, carNo: "#94", team: "PEUGEOT TOTALENERGIES", laps: 103, totalTime: "14:07:07", gap: "48 Laps", interval: "26 Laps" },
      { pos: 17, carNo: "#38", team: "CADILLAC HERTZ TEAM JOTA", laps: 85, totalTime: "14:51:36", gap: "66 Laps", interval: "18 Laps" }
    ]
  }
];

export const formulaRacesResultDataset: { eventId: number, result: FormulaRaceRow[] }[] = [
  {
    eventId: 1,
    result: [
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
    ]
  },
  {
    eventId: 9,
    result: [
      { pos: 1, no: 44, driver: "Lewis Hamilton", team: "Ferrari", laps: 66, timeOrRetired: "1:32:28.105", pts: 25 },
      { pos: 2, no: 63, driver: "George Russell", team: "Mercedes", laps: 66, timeOrRetired: "+19.561s", pts: 18 },
      { pos: 3, no: 1, driver: "Lando Norris", team: "McLaren", laps: 66, timeOrRetired: "+23.719s", pts: 15 },
      { pos: 4, no: 3, driver: "Max Verstappen", team: "Red Bull Racing", laps: 66, timeOrRetired: "+40.497s", pts: 12 },
      { pos: 5, no: 81, driver: "Oscar Piastri", team: "McLaren", laps: 66, timeOrRetired: "+58.661s", pts: 10 },
      { pos: 6, no: 6, driver: "Isack Hadjar", team: "Red Bull Racing", laps: 65, timeOrRetired: "+1 lap", pts: 8 },
      { pos: 7, no: 10, driver: "Pierre Gasly", team: "Alpine", laps: 65, timeOrRetired: "+1 lap", pts: 6 },
      { pos: 8, no: 30, driver: "Liam Lawson", team: "Racing Bulls", laps: 65, timeOrRetired: "+1 lap", pts: 4 },
      { pos: 9, no: 41, driver: "Arvid Lindblad", team: "Racing Bulls", laps: 65, timeOrRetired: "+1 lap", pts: 2 },
      { pos: 10, no: 43, driver: "Franco Colapinto", team: "Alpine", laps: 65, timeOrRetired: "+1 lap", pts: 1 },
      { pos: 11, no: 5, driver: "Gabriel Bortoleto", team: "Audi", laps: 64, timeOrRetired: "+2 laps", pts: 0 },
      { pos: 12, no: 55, driver: "Carlos Sainz", team: "Williams", laps: 64, timeOrRetired: "+2 laps", pts: 0 },
      { pos: 13, no: 31, driver: "Esteban Ocon", team: "Haas F1 Team", laps: 64, timeOrRetired: "+2 laps", pts: 0 },
      { pos: 14, no: 11, driver: "Sergio Perez", team: "Cadillac", laps: 63, timeOrRetired: "+3 laps", pts: 0 },
      { pos: 15, no: 16, driver: "Charles Leclerc", team: "Ferrari", laps: 62, timeOrRetired: "DNF", pts: 0 },
      { pos: 16, no: 12, driver: "Kimi Antonelli", team: "Mercedes", laps: 61, timeOrRetired: "DNF", pts: 0 },
      { pos: 17, no: 87, driver: "Oliver Bearman", team: "Haas F1 Team", laps: 60, timeOrRetired: "DNF", pts: 0 },
      { pos: 0, no: 23, driver: "Alexander Albon", team: "Williams", laps: 55, timeOrRetired: "+11 laps", pts: 0 },
      { pos: 0, no: 14, driver: "Fernando Alonso", team: "Aston Martin", laps: 37, timeOrRetired: "DNF", pts: 0 },
      { pos: 0, no: 27, driver: "Nico Hulkenberg", team: "Audi", laps: 29, timeOrRetired: "DNF", pts: 0 },
      { pos: 0, no: 77, driver: "Valtteri Bottas", team: "Cadillac", laps: 15, timeOrRetired: "DNF", pts: 0 },
      { pos: 0, no: 18, driver: "Lance Stroll", team: "Aston Martin", laps: 5, timeOrRetired: "DNF", pts: 0 }
    ]
  }
];

export const gtRacesResultDataset: { eventId: number, result: GtRaceRow[] }[] = [
  {
    eventId: 5,
    result: [
      { pos: 1, carNo: "66", raceClass: "Silver Cup", drivers: ["Rocco Mazzola", "Sebastian Øgaard", "Ariel Levi"], team: "Tresor Attempto Racing", carModel: "Audi R8 LMS GT3 EVO II", time: "1:47.306", laps: 79 },
      { pos: 2, carNo: "48", raceClass: "Pro Cup", drivers: ["Lucas Auer", "Luca Stolz", "Maro Engel"], team: "Mercedes-AMG Team MANN-FILTER", carModel: "Mercedes-AMG GT3 EVO", time: "1:46.445", laps: 79 },
      { pos: 3, carNo: "555", raceClass: "Silver Cup", drivers: ["Baptiste Moulin", "Romain Andriolo", "Lorens Lecertua"], team: "CSA Racing", carModel: "McLaren 720S GT3 EVO", time: "1:47.419", laps: 79 },
      { pos: 4, carNo: "2", raceClass: "Pro Cup", drivers: ["Morris Schuring", "Dorian Boccolacci", "Alessio Picariello"], team: "Boutsen VDS", carModel: "Porsche 911 GT3 R EVO", time: "1:46.788", laps: 79 },
      { pos: 5, carNo: "98", raceClass: "Pro Cup", drivers: ["Augusto Farfus", "Jake Dennis", "Raffaele Marciello"], team: "Rowe Racing", carModel: "BMW M4 GT3 EVO", time: "1:47.410", laps: 79 },
      { pos: 6, carNo: "23", raceClass: "Silver Cup", drivers: ["Horatio Fitz-Simon", "Maxwell Lynn", "Ben Dörr"], team: "Team RJN", carModel: "McLaren 720S GT3 EVO", time: "1:46.659", laps: 79 },
      { pos: 7, carNo: "96", raceClass: "Pro Cup", drivers: ["Luca Engstler", "Marco Mapelli", "Patric Niederhauser"], team: "Rutronik Racing", carModel: "Lamborghini Temerario GT3", time: "1:47.197", laps: 79 },
      { pos: 8, carNo: "74", raceClass: "Bronze Cup", drivers: ["Dustin Blattner", "Lorenzo Patrese", "Dennis Marschall"], team: "Kessel Racing", carModel: "Ferrari 296 GT3 EVO", time: "1:46.396", laps: 79 },
      { pos: 9, carNo: "56", raceClass: "Bronze Cup", drivers: ["Giacomo Petrobelli", "Lorcan Hanafin", "Jonathan Adam"], team: "Ecurie Ecosse Blackthorn", carModel: "Aston Martin Vantage AMR GT3 EVO", time: "1:47.060", laps: 79 },
      { pos: 10, carNo: "54", raceClass: "Silver Cup", drivers: ["Francesco Simonazzi", "Angus Whiteside", "Tanart Sathienthirakul"], team: "Dinamic GT", carModel: "Porsche 911 GT3 R EVO", time: "1:47.361", laps: 79 },
      { pos: 11, carNo: "50", raceClass: "Pro Cup", drivers: ["Lilou Wadoux", "Arthur Leclerc", "Sean Gelael"], team: "AF Corse", carModel: "Ferrari 296 GT3 EVO", time: "1:46.942", laps: 79 },
      { pos: 12, carNo: "42", raceClass: "Bronze Cup", drivers: ["Ahmad Al Harthy", "Javier Sagrera", "Calan Williams"], team: "Oman Racing by Century Motorsport", carModel: "BMW M4 GT3 EVO", time: "1:47.475", laps: 79 },
      { pos: 13, carNo: "6", raceClass: "Silver Cup", drivers: ["Anthony Bartone", "Cesar Gazeau", "Aurelien Panis"], team: "GetSpeed Team Bartone Bros", carModel: "Mercedes-AMG GT3 EVO", time: "1:47.226", laps: 79 },
      { pos: 14, carNo: "71", raceClass: "Gold Cup", drivers: ["Frederik Schandorff", "Malte Ebdrup", "Simon Birch"], team: "Selected Car Racing", carModel: "Ferrari 296 GT3 EVO", time: "1:47.422", laps: 79 },
      { pos: 15, carNo: "93", raceClass: "Bronze Cup", drivers: ["Jonathan Hui", "Chris Froggatt", "Eddie Cheever"], team: "Ziggo Sport Tempesta Racing", carModel: "Porsche 911 GT3 R EVO", time: "1:47.542", laps: 79 },
      { pos: 16, carNo: "991", raceClass: "Bronze Cup", drivers: ["Robert De Haan", "Darren Leung", "James Kellett"], team: "Paradine Competition", carModel: "BMW M4 GT3 EVO", time: "1:47.213", laps: 79 },
      { pos: 17, carNo: "30", raceClass: "Silver Cup", drivers: ["Ignacio Montenegro", "Matisse Lismont", "Amaury Cordeel"], team: "Team WRT", carModel: "BMW M4 GT3 EVO", time: "1:47.536", laps: 79 },
      { pos: 18, carNo: "58", raceClass: "Gold Cup", drivers: ["Thomas Fleming", "Louis Prette", "Benjamin Goethe"], team: "Garage 59", carModel: "McLaren 720S GT3 EVO", time: "1:47.296", laps: 79 },
      { pos: 19, carNo: "45", raceClass: "Silver Cup", drivers: ["Rafael Duran", "Dylan Medler", "David Perel"], team: "Rinaldi Racing", carModel: "Ferrari 296 GT3 EVO", time: "1:46.606", laps: 79 },
      { pos: 20, carNo: "84", raceClass: "Pro Cup", drivers: ["Christopher Haase", "Simon Reicher", "Markus Winkelhock"], team: "Eastalent Racing", carModel: "Audi R8 LMS LMS GT3 EVO II", time: "1:47.189", laps: 79 }
    ]
  },
  {
    eventId: 4,
    result: [
      { pos: 1, carNo: "80", raceClass: "Pro Cup", drivers: ["Ricardo Feller", "Thomas Preining", "Bastian Buus"], team: "Lionspeed GP", carModel: "Porsche 911 GT3 R (992) EVO", time: "2:17.484", laps: 541 },
      { pos: 2, carNo: "48", raceClass: "Pro Cup", drivers: ["Lucas Auer", "Luca Stolz", "Maro Engel"], team: "Mercedes-AMG Team MANN-FILTER", carModel: "Mercedes-AMG GT3 EVO", time: "2:17.855", laps: 541 },
      { pos: 3, carNo: "51", raceClass: "Pro Cup", drivers: ["Alessio Rovera", "Tommaso Mosca", "Nicklas Nielsen"], team: "AF Corse", carModel: "Ferrari 296 GT3 EVO", time: "2:17.340", laps: 541 },
      { pos: 4, carNo: "22", raceClass: "Pro Cup", drivers: ["Ayhancan Güven", "Matt Campbell", "Frederic Makowiecki"], team: "Schumacher CLRT", carModel: "Porsche 911 GT3 R (992) EVO", time: "2:18.105", laps: 541 },
      { pos: 5, carNo: "50", raceClass: "Pro Cup", drivers: ["Lilou Wadoux", "Arthur Leclerc", "Sean Gelael"], team: "AF Corse", carModel: "Ferrari 296 GT3 EVO", time: "2:18.095", laps: 541 },
      { pos: 6, carNo: "46", raceClass: "Pro Cup", drivers: ["Valentino Rossi", "Daniel Harper", "Max Hesse"], team: "Team WRT", carModel: "BMW M4 GT3 EVO", time: "2:18.076", laps: 541 },
      { pos: 7, carNo: "34", raceClass: "Pro Cup", drivers: ["Jamie Day", "Christian Krognes", "Henrique Chaves"], team: "natural elements by Walkenhorst Motorsport", carModel: "Aston Martin Vantage AMR GT3 EVO", time: "2:18.444", laps: 541 },
      { pos: 8, carNo: "2", raceClass: "Pro Cup", drivers: ["Morris Schuring", "Dorian Boccolacci", "Alessio Picariello"], team: "Boutsen VDS", carModel: "Porsche 911 GT3 R (992) EVO", time: "2:18.218", laps: 541 },
      { pos: 9, carNo: "98", raceClass: "Pro Cup", drivers: ["Augusto Farfus", "Jake Dennis", "Raffaele Marciello"], team: "Rowe Racing", carModel: "BMW M4 GT3 EVO", time: "2:18.321", laps: 540 },
      { pos: 10, carNo: "74", raceClass: "Bronze Cup", drivers: ["Dustin Blattner", "Ben Tuck", "Mathys Jaubert", "Dennis Marschall"], team: "Kessel Racing", carModel: "Ferrari 296 GT3 EVO", time: "2:18.743", laps: 540 },
      { pos: 11, carNo: "998", raceClass: "Gold Cup", drivers: ["Ugo De Wilde", "Tim Tramnitz", "Jens Klingmann"], team: "Rowe Racing", carModel: "BMW M4 GT3 EVO", time: "2:18.550", laps: 540 },
      { pos: 12, carNo: "32", raceClass: "Pro Cup", drivers: ["Kelvin van der Linde", "Jordan Pepper", "Charles Weerts"], team: "Team WRT", carModel: "BMW M4 GT3 EVO", time: "2:18.009", laps: 539 },
      { pos: 13, carNo: "991", raceClass: "Bronze Cup", drivers: ["Leyton Fourie", "Darren Leung", "David Pittard", "James Kellett"], team: "Paradine Competition", carModel: "BMW M4 GT3 EVO", time: "2:18.727", laps: 539 },
      { pos: 14, carNo: "45", raceClass: "Silver Cup", drivers: ["Rafael Duran", "Dylan Medler", "Alessandro Balzan", "David Perel"], team: "Rinaldi Racing", carModel: "Ferrari 296 GT3 EVO", time: "2:19.131", laps: 539 },
      { pos: 15, carNo: "30", raceClass: "Silver Cup", drivers: ["Ignacio Montenegro", "Amaury Cordeel", "Mathieu Detry", "Matisse Lismont"], team: "Team WRT", carModel: "BMW M4 GT3 EVO", time: "2:19.321", laps: 539 },
      { pos: 16, carNo: "52", raceClass: "Silver Cup", drivers: ["Francesco Braschi", "Jeff Machiels", "Matias Zagazeta", "Gilles Stadsbader"], team: "AF Corse", carModel: "Ferrari 296 GT3 EVO", time: "2:19.043", laps: 538 },
      { pos: 5, carNo: "5", raceClass: "Silver Cup", drivers: ["Salman Owega", "Dante Rappange", "Guilherme Oliveira", "Mikey Porter"], team: "Optimum Motorsport", carModel: "McLaren 720S GT3 EVO", time: "2:18.468", laps: 538 },
      { pos: 18, carNo: "65", raceClass: "Silver Cup", drivers: ["Finn Wiebelhaus", "Max Reis", "Maxime Oosten", "Eduardo Coseteng"], team: "HRT Ford Racing", carModel: "Ford Mustang GT3 EVO", time: "2:18.275", laps: 537 },
      { pos: 19, carNo: "96", raceClass: "Pro Cup", drivers: ["Luca Engstler", "Marco Mapelli", "Patric Niederhauser"], team: "Rutronik Racing", carModel: "Lamborghini Temerario GT3", time: "2:19.777", laps: 537 },
      { pos: 20, carNo: "89", raceClass: "Bronze Cup", drivers: ["Alex Fontana", "Bashar Mardini", "Axcil Jefferies", "Patrick Kolb"], team: "Lionspeed GP", carModel: "Porsche 911 GT3 R (992) EVO", time: "2:18.451", laps: 537 }
    ]
  }
];