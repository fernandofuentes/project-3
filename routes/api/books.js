// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
//
// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
//
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
//
// module.exports = router;

//**** I copied the above from an activity; We'll use it as a guide for our routes ****//

const router = require("express").Router();
const controller = require("../../controllers/controller.js");

router.route("/")

router.route("/sign-up/volunteer")
