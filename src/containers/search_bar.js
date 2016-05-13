import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
     // initialize state
     constructor(props) {
          super(props);
          
          this.state = { term: '' };
          /* avoids: uncaught typeerror: cannot read property 'setstate' of undefined */  
          this.onInputChange = this.onInputChange.bind(this);
          this.onFormSubmit = this.onFormSubmit.bind(this);
     }
     
     onInputChange(event) {
          this.setState({ term: event.target.value });
     }
     
     onFormSubmit(event) {
          event.preventDefault();
          
          // fetch weather data
          this.props.fetchWeather(this.state.term);
          // on submit clear search input
          this.setState({ term: '' });
     }
     
     // preventing form submit by adding onSubmit handler
     render() {
          return (
               <form onSubmit={this.onFormSubmit} className="input-group">
                    <input 
                         placeholder="Get your five-day forecast"
                         className="form-control"
                         value={this.state.term}
                         onChange={this.onInputChange} />
                    <span className="input-group-btn">
                         <button type="submit" 
                         className="btn btn-secondary">
                              Submit
                         </button>
                    </span>
               </form>
          );
     }
}

function mapDispatchToProps(dispatch) {
     return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);