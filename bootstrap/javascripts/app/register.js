var reg = function() {
	$("#username").val("John_Doe");
  $("#password").val("swordfish");
  $("#password-confirm").val("swordfish");
	$("#input").click(function(){
		$("#registration-result h5").html ("You're all signed up, "+$("#username").val()+"!");
		$("#registration-result p").html ("Return?");
    $("#registration-info").fadeOut(500, function(){
      $("#registration-result").fadeIn(500)
    });  
	});
}

$(document).ready(reg);