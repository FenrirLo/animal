$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var quote = (100 - age) * 3;
      if (gender === 'male' && age < 26) {
          quote += 50; }
      if (age < 16) {
        alert("You must be at least 16 to have a driver's license.")
      }

    $("#rate").empty().append(quote);
    $("#quote").show();

    $("rate").empty().append(quote);
    $("#quote").show();
  } else {
    alert('Please enter your age.');
  }

    event.preventDefault();
  });
});
