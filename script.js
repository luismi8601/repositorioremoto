document.querySelector("button.button-menu-toggle")
     .addEventListener("click", function () {
         document.querySelector(".nav-links").
             classList.toggle("nav-links-responsive")
     })
     
function showAlert() { alert("hola, esta es una alerta desde JavaScript"); }
// obtenemos el boton por su ID
let boton = document.getElementById("miBoton");
//añadimos un oyente al evento que escuche el evento click
boton.addEventListener("click", function () {
    alert("¡Haz hecho click aqui!")
});