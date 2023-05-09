import { sortByDESC } from 'hangul-util';

const rowStackList = [
  'HTML',
  'React',
  'JavaScript',
  'TypeScript',
  'CSS',
  'RESTful API',
  'ReactQuery',
  'd3',
  '반응형',
];

export const stackList = sortByDESC(rowStackList);
