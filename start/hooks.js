const { route } = require("@adonisjs/framework/src/Route/Manager");
const { hooks } = require("@adonisjs/ignitor");

hooks.after.providersBooted(() => {
  const View = use("View");
  const Route = use("Route");

  View.global("paginate", function (dataObject, pageRoute) {
    return this.safe(
      `<div class="col-md-6 col-md-offset-3 row mt-2">
            <a href="${
              dataObject.page == 1
                ? "#"
                : Route.url(pageRoute, { page: dataObject.page - 1 })
            }" rel="prev" class="pagination-btn">Previous</a>
            <p class="pagination-text">${dataObject.page} of ${
        dataObject.lastPage
      }</p>
            <a href="${
              dataObject.lastPage == dataObject.page
                ? "#"
                : Route.url(pageRoute, { page: dataObject.page + 1 })
            }" class="pagination-btn">Next</a>
        </div>`
    );
  });

  // We use this global to create easy pagination
  //   View.global("paginate", function (dataObject, pageRoute) {
  //     return this.safe(
  //       `<div class="col-md-6 col-md-offset-3 row mt-2">
  //             <a href="${
  //               dataObject.page == 1
  //                 ? "#"
  //                 : pageRoute || "" + "/" + Number(dataObject.page - 1)
  //             }" rel="prev" class="pagination-btn">Previous</a>
  //             <p class="pagination-text">${dataObject.page} of ${
  //         dataObject.lastPage
  //       }</p>
  //             <a href="${
  //               dataObject.lastPage == dataObject.page
  //                 ? "#"
  //                 : pageRoute || "" + "/" + Number(dataObject.page + 1)
  //             }" class="pagination-btn">Next</a>
  //         </div>`
  //     );
  //   });
});
