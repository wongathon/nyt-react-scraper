var React = require("react");

var Saved = React.createClass({

  renderArticles: function() {
    return this.props.savedArticles.map(
      article => 
         (
          <div key={article._id}>
            <div className="panel panel-default">
              <div className="panel-heading clearfix">
                <a href={article.web_url}><h4>{article.headline}</h4></a>
                <button
                  className="btn btn-danger pull-right"
                >Delete!</button>
              </div>
              <div className="panel-body">
                <p>Item saved on: {article.pub_date}</p>
              </div>
            </div>
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