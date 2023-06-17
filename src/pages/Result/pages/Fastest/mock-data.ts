import { Fastest } from './model'

export const mockData = [
  {
    'Grand Prix': 'Bahrain',
    Driver: 'Zhou Guanyu ZHO',
    Car: 'Alfa Romeo Ferrari',
    Time: '1:33.996',
  },
  {
    'Grand Prix': 'Saudi Arabia',
    Driver: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Time: '1:31.906',
  },
  {
    'Grand Prix': 'Australia',
    Driver: 'Sergio  Perez PER',
    Car: 'Red Bull Racing Honda RBPT',
    Time: '1:20.235',
  },
  {
    'Grand Prix': 'Azerbaijan',
    Driver: 'George Russell RUS',
    Car: 'Mercedes',
    Time: '1:43.370',
  },
  {
    'Grand Prix': 'Miami',
    Driver: 'Max Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Time: '1:29.708',
  },
  {
    'Grand Prix': 'Monaco',
    Driver: 'Lewis Hamilton HAM',
    Car: 'Mercedes',
    Time: '1:15.650',
  },
  {
    'Grand Prix': 'Spain',
    Driver: 'Max  Verstappen VER',
    Car: 'Red Bull Racing Honda RBPT',
    Time: '1:16.330',
  },
].map((item, idx) => ({ _id: idx, ...item } as unknown as Fastest))
