window.addEventListener("scroll", function() {
    var header = document.querySelector(".return");
    header.classList.toggle("active", this.window.scrollY>700);
})