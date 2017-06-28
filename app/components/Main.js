var React = require("react");

//sub components require here
var Saved = require("./Saved");
var Search = require("./Search");

var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return {
      searchQuery: "",
      results: [],
      savedArticles: []
    };
  },

  componentDidMount: function() {
    helpers.getArticles().then(function(response) {
      console.log(response);
      if (response !== this.state.savedArticles) {
        this.setState({ savedArticles: response.data });
      }
    }.bind(this));
  },

  componentDidUpdate: function() {
    helpers.runQuery(this.state.searchQuery).then(function(data) {
      if (data !== this.state.results) {
        console.log("Scraped", data);
        this.setState({results: data });
      }
    }.bind(this));
  },

  //use spread operator??
  setQuery: function(...term) {
    this.setState({ searchQuery: term });
  },


  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>New York Times Article Scrubber</h2>
            <hr />
            <p><em>Search for and annotate articles of interest!</em></p>
          </div>
        </div>

        <Search setQuery={this.setQuery} />

        <Saved savedArticles={this.state.savedArticles} />

      </div>


    );
  }
});

module.exports = Main;