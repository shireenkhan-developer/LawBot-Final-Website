var added = false; //checking button sign
var counter1 = 0; //counter for button1
var counter2 = 0; //counter for button2

//function to hide the lists
function myFunction(button) {
  var div = $("<div>", { class: "add-icon" });
  if (button.id == "bt1") {
    counter1++;
    if (counter1 % 2 == 0) {
      added = true;
    } else {
      added = false;
    }
    $(".fr-list").toggle();
  } else {
    counter2++;
    if (counter2 % 2 == 0) {
      added = true;
    } else {
      added = false;
    }
    $(".nfr-list").toggle();
  }

  //for changing the sign of a button
  if (!added) {
    $(button).append(div);
    $(button).find(".btn-txt").text("Show");
  } else {
    $(button).find(".add-icon").remove();
    $(button).find(".btn-txt").text("Hide");
  }
}

//function for calculating the rate/cost
$(".rate-btn").on("click", function () {
  var hrs = $("#rate").val();
  var cost_per_hr = 15; //dollars
  var cost = hrs * cost_per_hr;
  
  $("#cost-estimation p").html(
    `The Project Will Take ` +
      hrs +
      ` hrs For Completion And The Total Cost Will Be ` +
      cost +
      ` $ Approx.`
  );
});