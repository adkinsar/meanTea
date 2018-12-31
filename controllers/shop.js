const Tea = require('../models/tea');

exports.getProducts = (req, res, next) => {
  Tea.find()
  .then(products => {
    console.log(products);
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.id;
  Tea.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product, 
        pageTitle: product.name,
        path: '/products'
      });
    })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Tea.find()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
    });
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.id;
  console.log(prodId);
  res.redirect('/cart');
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};