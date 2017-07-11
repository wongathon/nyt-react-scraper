
var React = require("react");

const SavedArticle = (props) => {

  const { article } = props;
  const { handleClick } = props;

  return (
    <div className="panel panel-default">
      <div className="panel-heading clearfix">
        <a href={article.url}><h4>{article.title}</h4></a>
        <button
          className="btn btn-danger pull-right"
          onClick={() => handleClick(article._id)}
          id={article._id}
        >Delete!</button>
      </div>
      <div className="panel-body">
        <p>Item saved on: {article.date}</p>
      </div>
    </div>
  ); 
};

module.exports = SavedArticle;
