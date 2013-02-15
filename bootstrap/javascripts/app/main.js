var main=function() {
  console.log("Hello world!");
  $(window).load(function() {
    $('#slider').orbit();
  });
}

$(document).ready(main);