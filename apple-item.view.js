define(["apple-item.tpl"], function (appleItemTpl) {
  return Backbone.View.extend({
    tagName: "li", // backbone creates an HTML element for 'li'
    template: _.template(appleItemTpl), // this will be inserted into the tagName element
    events: {
      "click .add-to-cart": "addToCart", // event + jQuery element selector: function name
    },
    render: function () {
      this.$el.html(this.template(this.model.attributes)); // $el refers to tagName (li). The template string and current model attributes are inserted
    },
    addToCart: function () {
      this.model.collection.trigger("addToCart", this.model);
    },
  });
  /*   return '\
             <a href="#apples/<%=name%>" target="_blank">\
            <%=name%>\
            </a>&nbsp;<a class="add-to-cart" href="#">buy</a>\
            ' */
});
