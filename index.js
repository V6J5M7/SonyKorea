$(document).ready(function(){
  $(".h_samsun").click(function(){
    $(".h_sidebar").css("right", "0");
  });
  $(".h_sidebar>li>i").click(function(){
    $(".h_sidebar").css("right", "-60%");
  });
});