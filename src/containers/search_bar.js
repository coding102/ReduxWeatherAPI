import React, { Component } from 'react';

export default class SearchBar extends Component {
     // initialize state
     constructor(props) {
          super(props);
          
          this.state = { term: '' };
          /* avoids: uncaught typeerror: cannot read property 'setstate' of undefined */  
          this.onInputChange = this.onInputchange.bind(this);
     }
     
     onInputChange(event) {
          console.log(event.target.value);
          this.setState({ term: event.target.value })
     }
     
     render() {
          return (
               <form className="input-group">
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