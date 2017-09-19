var outputNumber = function(originalNumber) {
  var factoredNumber = originalNumber;
  for (var i = originalNumber-1; i > 0; i = i-1) {
     factoredNumber = factoredNumber*i;
  }
  return factoredNumber
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var originalNumber = parseInt($("#originalnumber").val());
    $("#output").text(outputNumber(originalNumber));
  });
});
