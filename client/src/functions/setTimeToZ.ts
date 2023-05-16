import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function setTimeToZ(timeStr: string) {
  const timeObj = dayjs(timeStr).utc().format('YYYY-MM-DD');

  return timeObj;
}
