import { Race } from "./model";

export const mockData = [
  {
    'Grand Prix': 'Bahrain',
    Date: '05 Mar 2023',
    Winner: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 57,
    Time: '1:33:56.736',
  },
  {
    'Grand Prix': 'Saudi Arabia',
    Date: '19 Mar 2023',
    Winner: 'Sergio Perez PER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 50,
    Time: '1:21:14.894',
  },
  {
    'Grand Prix': 'Australia',
    Date: '02 Apr 2023',
    Winner: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 58,
    Time: '2:32:38.371',
  },
  {
    'Grand Prix': 'Azerbaijan',
    Date: '30 Apr 2023',
    Winner: 'Sergio Perez PER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 51,
    Time: '1:32:42.436',
  },
  {
    'Grand Prix': 'Miami',
    Date: '07 May 2023',
    Winner: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 57,
    Time: '1:27:38.241',
  },
  {
    'Grand Prix': 'Monaco',
    Date: '28 May 2023',
    Winner: 'Max  Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 78,
    Time: '1:48:51.980',
  },
  {
    'Grand Prix': 'Spain',
    Date: '04 Jun 2023',
    Winner: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Laps: 66,
    Time: '1:27:57.940',
  },
].map((item, idx) => ({ _id: idx, ...item } as unknown as Race))
