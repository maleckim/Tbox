import styles from '../features/timesheet/Timesheet.module.css';
import Row from '../features/timesheet/components/Row';
import ContextMenu from '../features/timesheet/components/ContextMenu'

export default function createRows(data) {
  const tempArray = new Array(4).fill(0);
  return tempArray.map((item, index) => 
    data[index] ? <Row id={data[index]}>{data[index]}</Row> : <Row />);
}
