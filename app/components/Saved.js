var React = require("react");

var SavedArticle = require('./children/SavedArticle');

var Saved = React.createClass({

  articleDelete: function(event) {
    console.log(event);
    this.props.setDelete(event);
  },

  renderArticles: function() {
    return this.props.savedArticles.map(
      article => 
         (
          <div key={article._id}>
            <SavedArticle article={article} handleClick={this.articleDelete} />
          </div>
        )
    );
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">
          {//this.props.savedArticles
          }
          {this.renderArticles()}
        </div>
      </div>
    );
  }
});

module.exports = Saved;