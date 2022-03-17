import React from "react";
import Tracker from "./Tracker";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activities : [],
            currentActivity : ''
        };
    }
    componentDidMount() {
        if(localStorage.activities) {
            this.setState({
                activities : JSON.parse(localStorage.getItem('activities'))
            });
        }
        window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
    }
    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
    }
    handleUpdateLocalStorage = () => {
        localStorage.setItem('activities', JSON.stringify(this.state.activities));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let currentActivity = this.state.currentActivity.trim();
        if(currentActivity.length === 0)
        return;
        let activities = this.state.activities;
        activities.push(currentActivity);
        this.setState ({
            activities 
        })
    } 
    handleChange = (event) => {
        this.setState({
            currentActivity: event.target.value
        });
    }
    handleClose = (item) => {
        let activities = this.state.activities;
        activities = activities.filter((activity) => activity !== item);
        this.setState ({
            activities
        });
    } 
    
    render() {        
    return (
        <div className="container">
        <h1>Monthly Activity Tracker</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="" id="" placeholder="e.g. coding"  onChange={this.handleChange}/>
            <input type="submit" value="Add Activity"/>
        </form>
        {
            this.state.activities.map ((activity, i) => {
                return <Tracker key={activity+i} activity={activity} handleClose={this.handleClose}
                />
            })
        }
        </div>
    )
    }
}
export default App;