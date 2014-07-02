$(document).ready(function() {
  if (!window.nameTemplates) {
    window.nameTemplates = [];
  }
  var elements = $('.use-name');

  for (var i = 0; i < elements.length; i++) {
    window.nameTemplates.push( [elements[i], elements[i].innerHTML] );
  }
});

$('.model-name').on('change', function() {
  var name = this.value;
  $(window.nameTemplates).each(function(index, binding){
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