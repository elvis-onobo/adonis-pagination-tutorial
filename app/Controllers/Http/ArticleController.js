"use strict";

const Article = use("App/Models/Article");

class ArticleController {
  async getAllArticles({ params: { page }, response, view }) {
    try {
      const pageNumber = page || 1;

      const articles = await Article.query()
        .orderBy("id", "desc")
        .paginate(pageNumber, 10);

      return view.render("welcome", {
        articles: articles.toJSON(),
      });
    } catch (error) {
      console.log(error);

      session.flash({
        notification: {
          message: "Failed to fetch all articles",
        },
      });

      return response.redirect("back");
    }
  }
}

module.exports = ArticleController;
