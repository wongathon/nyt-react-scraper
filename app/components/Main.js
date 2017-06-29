var React = require("react");

//sub components require here
var Saved = require("./Saved");
var Search = require("./Search");
var Results = require("./Results");

var helpers = require("../utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return {
      searchQuery: {},
      results: [],
      savedArticles: []
    };
  },

  componentDidMount: function() {
    helpers.getArticles().then(function(response) {

      if (response !== this.state.savedArticles) {
        this.setState({ savedArticles: response.data });
      }
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {

    if (this.state.searchQuery !== prevState.searchQuery){
      helpers.runQuery(this.state.searchQuery).then(function(data) {
        if (data !== this.state.results) {
          console.log("Scraped", data);
          this.setState({results: data });
        }
      }.bind(this));
    };

  },

  setQuery: function(queryObj) {
    console.log("queryObj, Main:" + queryObj);
    this.setState({ searchQuery: queryObj });
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
          <div>

            <Search setQuery={this.setQuery} />

            <Results articles={this.state.results} />

            <Saved savedArticles={this.state.savedArticles} />
          </div>
        </div>
      </div>


    );
  }
});

module.exports = Main;