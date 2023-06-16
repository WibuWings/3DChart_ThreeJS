import { Team } from './model'

const mockRaw: Omit<Team, '_id'>[] = [
  {
    Pos: 1,
    Team: 'Red Bull Racing Honda RBPT',
    PTS: 287,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 43,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 44,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 36,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 57,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 44,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 25,
      },
      {
        'Grand Prix': 'Spain',
        Date: '	04 Jun 2023',
        PTS: 38,
      },
    ],
  },
  {
    Pos: 2,
    Team: 'Mercedes',
    PTS: 152,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 16,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 22,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 18,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 20,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 20,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 23,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 33,
      },
    ],
  },
  {
    Pos: 3,
    Team: 'Aston Martin Aramco Mercedes',
    PTS: 134,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 23,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 15,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 27,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 22,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 15,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 18,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 14,
      },
    ],
  },
  {
    Pos: 4,
    Team: 'Ferrari',
    PTS: 100,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 12,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 14,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 36,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 16,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 12,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 10,
      },
    ],
  },
  {
    Pos: 5,
    Team: 'Alpine Renault',
    PTS: 40,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 2,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 6,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 6,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 21,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 5,
      },
    ],
  },
  {
    Pos: 6,
    Team: 'McLaren Mercedes',
    PTS: 17,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 12,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 2,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 3,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 0,
      },
    ],
  },
  {
    Pos: 7,
    Team: 'Haas Ferrari',
    PTS: 8,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 1,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 6,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 1,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 0,
      },
    ],
  },
  {
    Pos: 8,
    Team: 'Alfa Romeo Ferrari',
    PTS: 8,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 4,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 2,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 2,
      },
    ],
  },
  {
    Pos: 9,
    Team: 'AlphaTauri Honda RBPT',
    PTS: 2,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 1,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 1,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 0,
      },
    ],
  },
  {
    Pos: 10,
    Team: 'Williams Mercedes',
    PTS: 1,
    history: [
      {
        'Grand Prix': 'Bahrain',
        Date: '05 Mar 2023',
        PTS: 1,
      },
      {
        'Grand Prix': 'Saudi Arabia',
        Date: '19 Mar 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Australia',
        Date: '02 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Azerbaijan',
        Date: '30 Apr 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Miami',
        Date: '07 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Monaco',
        Date: '28 May 2023',
        PTS: 0,
      },
      {
        'Grand Prix': 'Spain',
        Date: '04 Jun 2023',
        PTS: 0,
      },
    ],
  },
]

export const mockData = mockRaw.map((item, idx) => ({ _id: idx.toString(), ...item } as Team))
