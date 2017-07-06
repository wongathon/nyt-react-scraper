var React = require("react");

var ResultArticle = require('./children/ResultArticle');

var Results = React.createClass({

  articleSave: function(event) {
    console.log(event);
    this.props.setSaver(event);
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