// On load
$(function() {
  var release = "12-18-2015";
  $("release").text("The Force will Awaken " + moment(release).fromNow());
  $("title").text("The Force will Awaken " + moment(release).fromNow());
});

function setTime() {
  $("time").text(moment().format("MMMM Do YYYY, hh:mm:ss"));
  var t = setTimeout(function() {
    setTime();
  }, 500);
}
