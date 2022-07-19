window.addEventListener("scroll", function() {
    var back = this.document.querySelector(".return");
    back.classList.toggle("active", this.window.scrollY>600);
})