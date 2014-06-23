var templates = {
}
templates[$('.use-name')] = "Hello {{name}}"

$('.world').on( 'do', function() { console.log(this)});
$('.model-name').on('keyup', function(e){
  e.preventDefault();
  var name = $('.model-name').val();
  // console.log(name);
  var objects = Robin.extend(RobinObject, $('.use-name'))
  var newHtml = objects.render(templates[$('.use-name')], {name: name})
  $('.use-name').html(newHtml);

})