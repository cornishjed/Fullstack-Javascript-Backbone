define(["apple-home.tpl", "apple-item.view"], function (
  appleHomeTpl,
  appleItemView
) {
  return Backbone.View.extend({
    el: "body", // el holds jQuery selector
    listEl: ".apples-list",
    cartEl: ".cart-box",
    template: _.template(appleHomeTpl), // 2. ...goes into this space
    initialize: function () {
      this.$el.html(this.template);
      this.collection.on("addToCart", this.showCart, this);
    },
    showCart: function (appleModel) {
      $(this.cartEl).append(appleModel.attributes.name + "<br>");
    },
    render: function () {
      view = this;
      // So we can use view inside of closure
      this.collection.each(function (apple) {
        var appleSubView = new appleItemView({ model: apple });
        // creates subview with model apple
        appleSubView.render();
        // Compiles template and single apple data
        $(view.listEl).append(appleSubView.$el);
        // Append jQuery object from single
        // Apple to apples-list DOM element
      });
    },
  });
});
