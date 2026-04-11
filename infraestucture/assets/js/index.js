//Ação do botão de menu
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("hamburguerBtn");
  var dropdown = document.getElementById("dropdown");
  var open = false;

  btn.addEventListener("click", function () {
    open = !open;
    var spans = btn.getElementsByTagName("span");
    if (open) {
      dropdown.style.maxHeight = "300px";
      spans[0].style.transform = "translateY(7px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      dropdown.style.maxHeight = "0";
      spans[0].style.transform = "";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "";
    }
  });
});