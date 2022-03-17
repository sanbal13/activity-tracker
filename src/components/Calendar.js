import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked : []
    }
  }
  
  componentDidMount() {    
    if(localStorage[this.props.activity]) {
        this.setState({
            checked : JSON.parse(localStorage.getItem(this.props.activity))
        });
    }
    window.addEventListener('beforeunload', this.handleUpdateLocalStorage);
}
componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUpdateLocalStorage);
}
handleUpdateLocalStorage = () => {
    localStorage.setItem(this.props.activity, JSON.stringify(this.state.checked));
}


  handleChecked = (date) => {
    let checked = this.state.checked;
    this.setState({
      checked: checked.includes(date) ? checked.filter((item) => item !== date) : checked.concat(date)
    }); 
  }

  render() {   
  return (      
    <div className="calendar flex wrap flex-start item-stretch flex-60">
      {
          Array.from({length: this.props.daysInThisMonth},(_, i) => i + 1).map((date) => {
            return( 
                <div key={date} 
                onClick={() => this.handleChecked(date)}
                className={`date-wrapper center ${this.state.checked.includes(date) ? 'active' : ''}`}>
                    {date}                                       
                </div>
            )
          })          
      }   
        
      </div>
     
  );
}
}

export default Calendar;
