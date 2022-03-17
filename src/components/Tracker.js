import Activity from './Activity';
import Calendar from './Calendar';

function Tracker(props) {
  
  let today = new Date();
  let month = today.toLocaleDateString(undefined, { month: 'long' });
  let daysInThisMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  return (
    <div className="tracker flex flex-start">
      <Activity activity={props.activity} month={month} />
      <Calendar
        month={month}
        daysInThisMonth ={daysInThisMonth}
        activity={props.activity}
        handleChecked={props.handleChecked}
      />
      <div
        className="close center flex-10"
        onClick={() => props.handleClose(props.activity)}
      >
        x
      </div>
    </div>
  );
}

export default Tracker;
