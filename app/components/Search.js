var React = require("react");

var Search = React.createClass({

  getInitialState: function() {
    return { 
    topic: "Obama",
    startYear: "2012",
    endYear: "2014"
    }; //multiple items needed
    //Lookup return requirements, may need 3. 
  },

  handleChange: function(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    
    var itemObj = this.state;

    this.props.setQuery(itemObj);
    this.setState({ 
      topic: "",
      startYear: "",
      endYear: "" 
    });
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
              <h4><strong>Start Year</strong></h4>
              <input
                value={this.state.startYear}
                type="text"
                className="form-control text-center"
                id="startYear"
                onChange={this.handleChange} //neds a fix
                required
              />
              <h4><strong>End Year</strong></h4>
              <input
                value={this.state.endYear}
                type="text"
                className="form-control text-center"
                id="endYear"
                onChange={this.handleChange}
                required
              />
              <br />
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
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