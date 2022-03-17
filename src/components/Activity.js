
function Activity(props) {    
    return (
    <div className="activity center flex column flex-30">
    <h3>{props.activity}</h3>
    <h4 className="month">{props.month}</h4>
    </div>)
}
export default Activity;

