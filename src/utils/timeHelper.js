import Moment from 'react-moment';
import moment from 'moment'

export default function timeHelper() {
    

    let timeArray = new Array(91).fill(0);
    let y = 8;
    for(let i = 0; i < timeArray.length; i ++){

        let travelTime = moment('06:00','h:mm').add(i*y, 'm').format('hh:mm')
        timeArray[i] = travelTime;
        
    }  
      
return timeArray;    
}