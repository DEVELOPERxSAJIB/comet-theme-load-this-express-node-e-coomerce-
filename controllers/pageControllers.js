const path = require('path');
const {readFileSync, read, writeFileSync} = require('fs');
 
// home page controller
const showHomePage = (req, res) => {

    const slider = readFileSync(path.join(__dirname, '../db/homeSlider.json'));
    const clients = readFileSync(path.join(__dirname, '../db/homeClients.json'));
    const blogs = readFileSync(path.join(__dirname, '../db/homeBlogs.json'));
    
    res.render('index-2', {
        slider : JSON.parse(slider.toString()),
        clients : JSON.parse(clients.toString()),
        blogs : JSON.parse(blogs.toString())
    });
}

// singelBlog page controller
const showSingleBlogPage = (req, res) => {
    const posts = JSON.parse(readFileSync(path.join(__dirname, "../db/homeBlogs.json")));

    const single_post = posts.find(data => data.id == req.params.id)

    res.render('single', {
        posts : single_post
    })
}


// shop page controller
const showShopPage = (req, res) => {

    const all_product = JSON.parse(readFileSync(path.join(__dirname, '../db/shopProduct.json')));
    
    res.render('shop-3col', {
        all_product,
        option_product : ''
    });

}

// shop single page controller
const shopSinglePage = (req, res) => {

    const product = JSON.parse(readFileSync(path.join(__dirname, '../db/shopProduct.json')));

    const singel_product = product.find(data => data.id == req.params.id);
    
    res.render('shopSingle', {
        product : singel_product
    });
}

// show tag controllers
const showtags = (req, res) => {

    const all_product = JSON.parse(readFileSync(path.join(__dirname, '../db/shopProduct.json')));

    const { tag } = req.params
 
    const option_product = all_product.filter(data => data.tag == tag);

    res.render('shop-3col', {
        all_product,
        option_product
    });

} 

// show category controllers
const showcate = (req, res) => {
    const all_product = JSON.parse(readFileSync(path.join(__dirname, '../db/shopProduct.json')));

    const { cate } = req.params

    const option_product = all_product.filter(data => data.cate == cate);

    res.render('shop-3col', {
        all_product,
        option_product
    });

}


// module expots
module.exports = {
    showHomePage,
    showShopPage,
    showSingleBlogPage,
    shopSinglePage,
    showtags,
    showcate
}