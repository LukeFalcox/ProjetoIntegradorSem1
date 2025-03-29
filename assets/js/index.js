document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobile_btn");
  const mobileMenu = document.getElementById("mobile_menu");
  const icon = mobileBtn.querySelector("i");

  mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});

// ================

var json = {
  watts: "0",
  horas: "0",
  wh: "0",
  kwh: "0",
};
document.getElementById("textwatts").innerHTML = json.watts;
document.getElementById("texthoras").innerHTML = json.horas;
document.getElementById("textwh").innerHTML = json.wh;
document.getElementById("textkwh").innerHTML = json.kwh;
