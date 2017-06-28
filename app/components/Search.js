var React = require("react");

var Search = React.createClass({

  getInitialState: function() {
    return { query: "" }; //multiple items needed
    //Lookup return requirements, may need 3. 
  },

  handleChange: function(event) {

    //handling multiple *handlechange for form fields? 
    //Lookup handleChange
    this.setState({ term: event.target.value });


  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setQuery(this.state.query);
    this.setState({ query: "" });
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4><strong>Topic</strong></h4>
              <input
                value={this.state.topic}
                type="text"
                className="form-control text-center"
                id="topic"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <h4><strong>Start Year</strong></h4>
              <input
                value={this.state.startYear}
                type="text"
                className="form-control text-center"
                id="topic"
                onChange={this.handleChange} //neds a fix
                required
              />
            </div>
            <div className="form-group">
              <h4><strong>End Year</strong></h4>
              <input
                value={this.state.endYear}
                type="text"
                className="form-control text-center"
                id="topic"
                onChange={this.handleChange}
                required
              />
            </div>
            <br />
            <button className="btn btn-primary" type="submit">Search</button>
          {/*Topic
          //Start Year
          //End Year
          Search btn*/}
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Search;