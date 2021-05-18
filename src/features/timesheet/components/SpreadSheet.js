import React, { useEffect } from 'react';
import timeHelper from '../../../utils/timeHelper';
import createRows from '../../../utils/createRows';


export default function SpreadSheet(props) {
  let times = timeHelper();
  const data = props.data;


  function renderTables(t, d) {
    if (d[t]) {
      return createRows(d[t]);
    }
    return createRows(d);
  }

  const GenerateTable = (props) => {
    const [data] = props.data;

    return times.map((t) => (
      <tr>
        <th className="commonRow time">{t}</th>
        {renderTables(t, data)}
      </tr>
    ));
  };

  const tableHeader = () => {
    return (
      <>
        <th className="commonRow"><div className="innerTable">Tee Times</div></th>
        <th className="commonRow"><div className="innerTable">Player 1</div></th>
        <th className="commonRow"><div className="innerTable">Player 2</div></th>
        <th className="commonRow"><div className="innerTable">Player 3</div></th>
        <th className="commonRow"><div className="innerTable">Player 4</div></th>
      </>
    );
  };

  return (
    <table>
      {tableHeader()}
      <GenerateTable data={data} />
    </table>
  );
}
