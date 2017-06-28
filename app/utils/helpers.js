
var axios = require("axios");

module.exports = {

  runQuery: function(queryParams) {

    var queryURL = "";

    //run cheerio stuff here?

  },

  getArticles: function() {
    return axios.get("api/saved");
  },
  saveArticle: function(articleData) {
    return axios.post("api/saved", articleData);
  },
  //CHECK
  deleteArticle: function(articleID) {
    return axios.delete("api/saved", articleID);
  }
};