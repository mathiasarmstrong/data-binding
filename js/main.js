$('.model-name').on('change', function() {
  var name = this.value;
  $('.use-name').each(function(index, elem){
    elem = $(elem);
    var template = elem.html();
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
}