document.addEventListener("DOMContentLoaded", function () {
  console.log("NIC Atlantic Global Services website loaded successfully.");

  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
