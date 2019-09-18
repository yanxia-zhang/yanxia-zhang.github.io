window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("avatar").style.width = "85px";
  } else {
    document.getElementById("avatar").style.width = "150px";
  }
}
