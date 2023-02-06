requirejs.config({
  urlArgs: "bust=" + new Date().getTime(),
});
require([
  "apple-item.tpl",
  "apple-home.tpl",
  "apple-spinner.tpl",
  "apple.tpl",
  "apple-item.view",
  "apple-home.view",
  "apple.view",
  "apples",
], function (
  appleItemTpl,
  appleHomeTpl,
  appleSpinnerTpl,
  appleTpl,
  appleItemView,
  homeView,
  appleView,
  Apples
) {
  // set up database
  var appleData = [
    // data models
    {
      name: "fuji",
      url: "img/fuji.jpg",
    },
    {
      name: "gala",
      url: "img/gala.jpg",
    },
  ];

  var app;
  var router = Backbone.Router.extend({
    routes: {
      "": "home", // 'route in address': 'function executed'
      "apples/:appleName": "loadApple",
    },
    initialize: function () {
      var apples = new Apples(); // instatiate new Apples object
      apples.reset(appleData); // 1. apples object(model) filled with appleData
      this.homeView = new homeView({ collection: apples }); // 2. and passed into both Views
      this.appleView = new appleView({ collection: apples });
    },
    home: function () {
      this.homeView.render();
    },
    loadApple: function (appleName) {
      this.appleView.loadApple(appleName); // appleView is BackBone.View function
    },
  });

  $(document).ready(function () {
    app = new router();
    Backbone.history.start();
  });
});
