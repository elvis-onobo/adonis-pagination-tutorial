"use strict";

const Article = use("App/Models/Article");

class ArticleController {
  async getAllArticles({ session, params: { page }, response, view }) {
    try {
      const pageNumber = page || 1;

      const articles = await Article.query()
        .orderBy("id", "desc")
        .paginate(pageNumber, 8);

      return view.render("welcome", {
        articles: articles.toJSON(),
      });
    } catch (error) {
      console.log("There has been an error loading the page ====>", error);

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
