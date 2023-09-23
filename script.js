$(document).ready(function () {
  // Content Toggle
  $("#toggle-button").click(function () {
      $("#extended-content").toggle();
      var buttonText = $("#toggle-button").text();
      $("#toggle-button").text(buttonText === "Read More" ? "Read Less" : "Read More");
  });

  // ROI Calculator
  $("#calculate-button").click(function () {
      var initialInvestment = parseFloat($("#initial-investment").val());
      var revenue = parseFloat($("#revenue").val());
      var expenses = parseFloat($("#expenses").val());

      if (isNaN(initialInvestment) || isNaN(revenue) || isNaN(expenses)) {
          $("#roi-result").text("Please enter valid numbers in all fields.");
      } else {
          var roi = ((revenue - expenses - initialInvestment) / initialInvestment) * 100;
          $("#roi-result").text("ROI: " + roi.toFixed(2) + "%");
      }
  });
});
