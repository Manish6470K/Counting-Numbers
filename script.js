$("#start").click(function () {
  clearTimeout();
  var finish = 0;
  var numb = $("#countNum").val();
  if (numb != 0) {
    $("#countNum").val("");
    work(numb);
    var chkRun = $("#countArea").html();
    if (chkRun != 0) {
      $("#countNum").attr("disable", true);
    }
  }
});
function work(num) {
  $("#countArea").html(num);
  num--;
  if (num >= 0) {
    var time1 = setTimeout(work, 1000, num);
  } else {
    var time1 = setTimeout(work, 1000, "0");
    $("#countNum").attr("disable", false);
    finish = 1;
  }
}

$("#reset").click(function () {
  reset();
});

function reset() {
    
}
