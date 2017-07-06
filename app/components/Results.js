var React = require("react");

var ResultArticle = require('./children/ResultArticle');

var Results = React.createClass({

  getInitialState: function() {
    return {
      saveMeId: "",
    };
  },

  articleSave: function(event) {

    console.log(event);

    this.props.setSaver(event);

    //delete?
    this.setState({saveMeId: ""});
  },

  renderArticles: function() {
    return this.props.articles.map(
      article => 
         (
          <div key={article._id}>
            <ResultArticle article={article} handleClick={this.articleSave} />
          </div>
        )
    );
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {this.renderArticles()}
        </div>
      </div>
    );
  }
});

module.exports = Results;