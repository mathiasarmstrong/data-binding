var bindTemplatesForModel = function(modelName) {
  if (!window.bindings) {
    window.bindings = {}
  }
  if (!window.bindings[modelName]) {
    window.bindings[modelName] = [];
  }
  var elements = $('.use-' + modelName);

  for (var i = 0; i < elements.length; i++) {
    window.bindings[modelName].push( [elements[i], elements[i].innerHTML] );
  }
}

$(document).ready(function() {
  bindTemplatesForModel("name")
});

$('.model-name').on('change', function() {
  var name = this.value;
  $(window.bindings["name"]).each(function(index, binding){
    elem = $(binding[0]);
    var template = binding[1]
    var newHtml = applyTemplate(template, {name: name})
    elem.html(newHtml);
  });
});

var applyTemplate = function(template, values){
  for (key in values) {
    var regex = new RegExp("{{" + key + "}}", "g");
    template = template.replace(regex, values[key])
  }
  return template;
};