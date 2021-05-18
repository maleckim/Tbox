
import Row from '../features/components/Row';



export default function createRows(data) {
  const tempArray = new Array(4).fill(0);
  
  return tempArray.map((item, index) => {
      const cellData = data[index]
      
      const TimeRow = (props) => {
        return(
          <Row id={cellData}>{cellData}</Row>
        )
      }
      if(cellData){
        return <TimeRow />
      }
      return <Row />
    });
}
