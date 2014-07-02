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

var modelValues = {}

var changeModelValue = function(modelName, modelValue) {
  $(window.bindings[modelName]).each(function(index, binding){
    elem = $(binding[0]);
    var template = binding[1]
    modelValues[modelName] = modelValue;
    var newHtml = applyTemplate(template, modelValues)
    elem.html(newHtml);
  });
}

var setListenerForModel = function(modelName) {
  $('.model-' + modelName).on('change', function() {
    changeModelValue(modelName, this.value);
  });  
}

$(document).ready(function() {
  bindTemplatesForModel("name");
  setListenerForModel("name");
  bindTemplatesForModel("meetup");
  setListenerForModel("meetup");
});


var applyTemplate = function(template, values){
  for (key in values) {
    var regex = new RegExp("{{" + key + "}}", "g");
    template = template.replace(regex, values[key])
  }
  return template;
};