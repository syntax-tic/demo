const  express  = require("express");
const router = express.Router();
const bookController = require('../controllers/book-controller');


router.route('/data/addBook').post(bookController.addBook);
router.route('/data/getBook').get(bookController.getBook);
router.route('/data/getAllBooks').get(bookController.getAllBooks);
router.route('/data/deleteBook').delete(bookController.deleteBook);

module.exports = router;