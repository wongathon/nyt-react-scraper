var React = require("react");

var Results = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          {//this.props.articles
          }
          
          {this.props.articles.map(function(article, i){
            return (
              <div key={i} className="panel panel-default">
                <div className="panel-heading">
                  {article.lead_paragraph}
                </div>
                <div className="panel-body">
                  {article.snippet}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
});

module.exports = Results;