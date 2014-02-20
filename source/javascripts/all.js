$(document).ready(function(){
  $("#preview_2").click(function(){
    $(".modal-tarp").toggleClass("hide animated fadeIn",function(){
      $(this).remove();
    });
    $("#preview_2").toggleClass("slide_out", function(){
      $(this).remove();
    });
  });
});