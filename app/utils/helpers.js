
var axios = require("axios");

var authKey = "c612fa93658a4df3a230ac8c064162e3";

var helper = {

  runQuery: function(queryObj) {

    let {topic, startYear, endYear} = queryObj;

    var queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=`;
    var queryURL = queryURLBase + encodeURI(topic);
    queryURL += `&begin_date=${startYear}0101`;
    queryURL += `&end_date=${endYear}0101`;

    console.log(queryURL);

    return axios.get(queryURL).then(function(response) {
      if(response.data) {
        return response.data.response.docs;
      }
      return "no items found on NYT!";
    });
  },

  getArticles: function() {
    return axios.get("api/saved");
  },
  saveArticle: function(articleData) {
    return axios.post("api/saved", articleData);
  },
  //CHECK
  deleteArticle: function(articleID) {
    return axios.delete("api/saved", {params: { articleID }});
  }
};

module.exports = helper;