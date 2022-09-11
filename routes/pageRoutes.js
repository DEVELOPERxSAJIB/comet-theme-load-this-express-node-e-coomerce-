const express = require('express');
const {showHomePage, showShopPage, showSingleBlogPage, shopSinglePage, showtags, showcate} = require('../controllers/pageControllers'); 

// init router
const router = express.Router();

// routes
router.get('/', showHomePage);
router.get('/shop', showShopPage);
router.get('/shop/:cate', showcate);
router.get('/blog/:id', showSingleBlogPage);
router.get('/view/:id', shopSinglePage);
router.get('/shop/:tag', showtags);





// module exports
module.exports = router;