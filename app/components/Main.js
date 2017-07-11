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
      saveQuery: "",
      results: [],
      savedArticles: [],
      deleteQuery: ""
    };
  },

  componentDidMount: function() {
    helpers.getArticles().then(function(response) {
      if (response.data !== this.state.savedArticles) {
        this.setState({ savedArticles: response.data });
      }
    }.bind(this));
  },

  componentDidUpdate: function(prevProps, prevState) {

    //on search update
    if (this.state.searchQuery !== prevState.searchQuery){
      helpers.runQuery(this.state.searchQuery).then(function(data) {
        if (data !== this.state.results) {
          console.log("Got them scrubbed:", data);
          this.setState({results: data });
        }
      }.bind(this));

    } else if (this.state.saveQuery !== prevState.saveQuery){
      //const newArticle = ;
      const newArticle = this.state.results.find(x => x._id === this.state.saveQuery);
      console.log("new article match:", newArticle);
      
      helpers.saveArticle(newArticle).then(function(data) {
        helpers.getArticles().then(function(response) {
          console.log("Get saved articles!", response.data);
          this.setState({ savedArticles: response.data });
        }.bind(this));
      }.bind(this));

    } else if (this.state.deleteQuery !== prevState.deleteQuery){
      helpers.deleteArticle(this.state.deleteQuery).then(function(data) {

        helpers.getArticles().then(function(response) {
          console.log("Get saved articles!", response.data);
          this.setState({ savedArticles: response.data });
        }.bind(this));

      }.bind(this));
    };

  },

  setQuery: function(queryObj) {
    console.log("queryObj, Main:" + queryObj);
    this.setState({ searchQuery: queryObj });
  },

  setSaver: function(saveObjId) {
    console.log("saveObjId passed:", saveObjId);
    this.setState({saveQuery: saveObjId});
  },

  setDelete: function(deleteObjId) {
    console.log("Delete ID passed:", deleteObjId);
    this.setState({deleteQuery: deleteObjId});
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
          <div className="row">
            <div className= "col-md-8 col-md-offset-2">
              <Search setQuery={this.setQuery} />
            </div>
          </div>
          <div className="row">

            <Results 
              setSaver={this.setSaver}
              articles={this.state.results} />

            <Saved 
              setDelete={this.setDelete}
              savedArticles={this.state.savedArticles} />

          </div>
        </div>
      </div>


    );
  }
});

module.exports = Main;