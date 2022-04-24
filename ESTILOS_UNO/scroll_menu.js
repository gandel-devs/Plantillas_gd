window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var nom_emp = this.document.querySelector(".nombre_empresa")
    header.classList.toggle("abajo", this.window.scrollY>700);
    nom_emp.classList.toggle("mostrar", this.window.scrollY>700);
})