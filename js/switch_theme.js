document.getElementById("swicththeme").onclick = function () {
    document.getElementById("mybody").classList.toggle("dark")
}
document.addEventListener("DOMContentLoaded", function () {
    let header = document.getElementById("site-header");
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 10) {
            header.classList.add("nav-fixed")
        }
        else {
            header.classList.remove("nav-fixed")
        }
    })
})
document.getElementById("btn-toggler").onclick = function() {
    document.getElementById("site-header").classList.toggle("active-header")
}