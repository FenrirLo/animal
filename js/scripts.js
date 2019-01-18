$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var boat = $("select#boat").val();
    var shoes = $("select#shoes").val();

    if (age) {
      var quote = ("#ncbunny");
      if (boat === 'yes' && age < 25 < 35);

      // if (boat) {
      //   var quote = ncbunny;
      //   if (quote === "yes" && shoes === "boots";
      //   }
      $("#rate").empty().append();
      $("#quote1").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
