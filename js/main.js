$('.model-name').on('change', function() {
  var name = this.value;
  $('.use-name').each(function(index, elem){
    elem = $(elem);
    var template = elem.html();
    var newHtml = name;
    // newHtml = applyTemplate(template, {name: elem.val()})
    elem.html(name);
  });
});