$("#amount-other-input").focus(function () {
  $("#donate-other").prop("checked", true);
});

$("#amount-other-input").on("keyup", function () {
  $("#donate-other").val($(this).val());
  $(".payment__button").removeAttr("disabled");
});

$(".donation-amount__radio").each(function () {
  $(this).on("click", function () {
    $(".payment__button").removeAttr("disabled");
  });
});

$(".payment__button").on("click", function (e) {
  e.preventDefault();
  window.location.href = "https://rzp.io/l/zwnl0Quooi";
});
