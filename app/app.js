function initListeners() {
  $("#nav nav a").click(function (e) {
    var btnID = this.id;
    MODEL.getView(btnID);
  });
}

function initSite() {
  $.get("../views/nav.html", function (nav) {
    $("#nav").html(nav);
    initListeners();
  });

  $.get("../views/home.html", function (data) {
    $("#app").html(data);
  });

  $.get("../views/footer.html", function (footer) {
    $("#footer").html(footer);
  });
}

$(document).ready(function () {
  initSite();
});
