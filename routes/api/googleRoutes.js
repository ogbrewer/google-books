const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/:search")
  .get(googleController.search)
 



module.exports = router;
