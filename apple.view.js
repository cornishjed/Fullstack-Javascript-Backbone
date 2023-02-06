define(["apple.tpl", "apple-spinner.tpl"], function (
  appleTpl,
  appleSpinnerTpl
) {
  return Backbone.View.extend({
    // loads during appleView execution
    initialize: function () {
      // create and setup model (aka an apple)
      this.model = new (Backbone.Model.extend({}))();
      this.model.bind("change", this.render, this); // when a change in the model occurs, appleView is re-rendered.
      this.bind("spinner", this.showSpinner, this); // the showSpinner method is called when spinner is fired.
    },
    template: _.template(appleTpl),
    templateSpinner: appleSpinnerTpl, // spinner image
    loadApple: function (appleName) {
      // router function: f(query search parameter)
      this.trigger("spinner");
      var view = this;
      setTimeout(function () {
        view.model.set(
          view.collection.where({ name: appleName })[0].attributes
        );
      }, 1000);
    },
    render: function (appleName) {
      var appleHtml = this.template(this.model);
      $("body").html(appleHtml);
    },
    showSpinner: function () {
      $("body").html(this.templateSpinner);
    },
  });
});
