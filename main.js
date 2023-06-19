// declaro una variable que lleva el contador
let value = 0;
// traigo el span para modificar el valor del numero segun el contador
let span = document.getElementById("value");
// traigo a los botones por clase para poder verificar cuando se preciona uno y modificar el valor del value
let btns = document.querySelectorAll(".btn");

// debo hacer que al hacer click al respectivo boton este haga el efecto deseado

console.log(btns);

btns.forEach(item => {
    item.addEventListener("click", function () {
        if (item.classList.contains("decrease")) {
            // si el boton tiene la clase decrease entonces:
            // el valor de value se disminuye en 1
            value--;
            // actualiza el valor del span
            span.textContent = value;
        }
        else if (item.classList.contains("reset")) {
            // si el boton tiene la clase reset entonces:
            // el valor de value es 0
            value = 0;
            // actualiza el valor del span
            span.textContent = value;
        }
        else if (item.classList.contains("increase")) {
            // si el boton tiene la clase increase entonces:
            // el valor de value incrementa en 1
            value++;
            // actualiza el valor del span
            span.textContent = value;
        }
        console.log(value);
        if(value>0){
            span.style.color = "green";
        }
        else if (value==0) {
            span.style.color = "black";
        }
        else if (value < 0) {
            span.style.color = "red";
        }
    })
})
