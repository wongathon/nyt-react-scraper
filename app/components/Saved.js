var React = require("react");

var Saved = React.createClass({

  renderArticles: function() {
    return this.props.savedArticles.map(
      article => 
         (
          <div key={article._id}>
            <p>{article.title}</p>
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
        <div className="panel-body text-center">
          {//this.props.savedArticles
          }
          {this.renderArticles()}
        </div>
      </div>
    );
  }
});

module.exports = Saved;