import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
        <div className="filter">
            <input type="checkbox" value="All"/>All<br/>
            <input type="checkbox" value="React" name="React" checked="checked"/>React<br/>
            <input type="checkbox" value="Data science" name="Data science"/>Data science<br/>
            <input type="checkbox" value="Web" name="Web"/>Web<br/>
        </div>
    );
  }
}

export default Filter;
