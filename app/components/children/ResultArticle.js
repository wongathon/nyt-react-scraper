
var React = require("react");

const ResultArticle = (props) => {

  const { article } = props;
  const { handleClick } = props;

  return (
    <div className="panel panel-default">
      <div className="panel-heading clearfix">
        <a href={article.web_url}><h4>{article.headline.main}</h4></a>
        <button
          className="btn btn-success pull-right"
          onClick={() => handleClick(article._id)}
          id={article._id}
        >Save!</button>
      </div>
      <div className="panel-body">
        {article.abstract ? article.abstract : article.snippet}
        <p></p>
      </div>
    </div>
  );
};

module.exports = ResultArticle;

