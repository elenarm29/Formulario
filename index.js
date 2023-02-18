const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")



function comprobarClaves() {
 
    clave1 = document.getElementById('clave1');
    clave2 = document.getElementById('clave2');
 
     
    if (clave1.value != clave2.value) {
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
        document.getElementById("error").classList.remove("mostrar");
        document.getElementById("login").disabled = true;

        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}