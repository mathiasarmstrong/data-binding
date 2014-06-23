Robin.findTemplates();
$('.model-name').on('keyup', function(){
  Robin.updateModel("name", this.value);
})