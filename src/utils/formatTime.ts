import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const DATA_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatTime(
  utcString: string,
  format: string = DATA_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
