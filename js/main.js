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

var changeModelValue = function(modelName, modelValue) {
  $(window.bindings[modelName]).each(function(index, binding){
    elem = $(binding[0]);
    var template = binding[1]
    var values = {};
    values[modelName] = modelValue;
    var newHtml = applyTemplate(template, values)
    elem.html(newHtml);
  });
}

$(document).ready(function() {
  bindTemplatesForModel("name")
});

$('.model-name').on('change', function() {
  changeModelValue("name", this.value);
});

var applyTemplate = function(template, values){
  for (key in values) {
    var regex = new RegExp("{{" + key + "}}", "g");
    template = template.replace(regex, values[key])
  }
  return template;
};