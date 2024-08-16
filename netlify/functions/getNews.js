const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { countryCode } = event.queryStringParameters;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=general&apiKey=${apiKey}`,
      {
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
      }
    );

    const articles = response.data.articles.slice(0, 3).map((article) => ({
      title: article.title.split(" - ").slice(0, -1).join(" "),
      author: article.author,
      url: article.url,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ articles }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
