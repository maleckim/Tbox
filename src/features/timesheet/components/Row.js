export default function Row(props) {
    
  return (
      
    <th
      onClick={(e) => (e.target.contentEditable = true)}
      contentEditable={false}
      className="commonRow"
      id={props.id}
      draggable
    >
    <div className="innerTable">
      {props.children}
      </div>
    </th>
   
  );
}
